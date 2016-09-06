import '../styles/main.scss';
import '../../index.html';

import axios from 'axios';
import key from './api_key';

const state = {
  "term": '',
  "videos": [],
  "videosHTML": '',
  "selectedVideo": {},
  "selectedVideoHTML": ''
};

function initRender(){
  const SearchBar = `<form class="search-bar">
    <input placeholder="Let's search the youtube verse" />
  </form>`;
  const App = `<section>
    ${SearchBar}
  </section>
  <section id="video-section"></section>`;
  document.getElementById('container').innerHTML = App;
  document.querySelector('.search-bar').addEventListener('submit', searchVids);
}

function searchVids(e){
  e.preventDefault();
  state.term = e.target.children[0].value;
  getVids(state.term);
}

function getVids(q = 'Good old fashioned lover boy') {
  if (!q.length) {
    q = 'Blank Space'
  }
  var params = {
    part: 'snippet',
    key,
    q,
    type: 'video'
  };

  axios.get('https://www.googleapis.com/youtube/v3/search', { params })
    .then(({ data }) => {
      state.videos = data.items.slice();
      vidsList(state.videos)
    });
}

function vidsList(videos){
  const videoListItems = videos.map((video, i) => {
    const { thumbnails: { default: { url } }, title } = video.snippet;
    return `<li class="list-group-item">
      <div class="video-list media">
        <div class="media-left">
          <img class="media-object" src=${url} />
        </div>
      </div>
      <div class="media-body">
        <div class="media-heading">${title}</div>
      </div>
    </li>`;
  });
  const videoList = `<ul class="col-md-4 list-group">${videoListItems.join('')}</ul>`;
  const [ firstVideo ] = videos;
  state.selectedVideo = firstVideo;
  state.videosHTML = videoList;
  vidsPlayer(0);
}

function vidsPlayer(num) {
  const { id, snippet: { title, description }} = state.videos[num];
  const videoUrl = `https://www.youtube.com/embed/${id.videoId}`;
  const videoDetail =  `<div class="video-detail col-md-8">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" allowfullscreen="allowfullscreen" src=${videoUrl}></iframe>
    </div>
    <div class="details">
      <h6>${title}</h6>
      <span>${description}</span>
    </div>
  </div>`;
  state.selectedVideo = state.videos[num];
  state.selectedVideoHTML = videoDetail;
  vidsRender();
}

function vidsRender(videoDetail = state.selectedVideoHTML, videoList = state.videosHTML) {
  const VideoSection = videoDetail + videoList;
  document.querySelector('#video-section').innerHTML = VideoSection;
  [].slice.call(document.querySelectorAll('.list-group-item')).map((item, i) => {
      console.log('i', i);
      console.log('item', item);
    item.addEventListener('click', () => {
      vidsPlayer(i);
    });
  })
}

initRender();
