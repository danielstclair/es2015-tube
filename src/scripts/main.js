import '../styles/main.scss';
import '../../index.html';

import $ from 'jquery';
import YTSearch from 'youtube-api-search';
import API_KEY from './api_key';

var state = {
  "term": '',
  "videos": [],
  "videosHTML": '',
  "selectedVideo": {},
  "selectedVideoHTML": ''
};

function initRender(){
  var SearchBar = '<form class="search-bar"><input placeholder="Let\'s search the youtube verse" /></form>';
  var App = '<section>' + SearchBar + '</section><section id="video-section"></section>';
  $('#container').html(App);
  $('.search-bar').on('submit', searchVids);
}

function searchVids(e){
  e.preventDefault();
  state.term = e.target.children[0].value;
  getVids(state.term);
}

function getVids(term) {
  var params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video'
  };
  $.get('https://www.googleapis.com/youtube/v3/search', params)
    .done(function(data){
      state.videos = data.items.slice();
      vidsList(state.videos)
    });
}

function vidsList(videos){
  var VideoListItems = videos.map(function(video, i){
    return '<li class="list-group-item"><div class="video-list media"><div class="media-left"><img class="media-object" src=' + video.snippet.thumbnails.default.url + ' /></div></div><div class="media-body"><div class="media-heading">' + video.snippet.title + '</div></div></li>';
  });
  var VideoList = '<ul class="col-md-4 list-group">' + VideoListItems.join('') + '</ul>';
  state.selectedVideo = videos[0];
  state.videosHTML = VideoList;
  vidsPlayer(0);
}

function vidsPlayer(num) {
  var videoUrl = 'https://www.youtube.com/embed/' + state.videos[num].id.videoId;
  var VideoDetail =  '<div class="video-detail col-md-8"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" allowfullscreen="allowfullscreen" src=' + videoUrl + '></iframe></div><div class="details"><h6>' + state.videos[num].snippet.title + '</h6><span>' + state.videos[num].snippet.description +'</span></div></div>';
  state.selectedVideo = state.videos[num];
  state.selectedVideoHTML = VideoDetail;
  vidsRender();
}

function vidsRender(VideoDetail, VideoList) {
  VideoDetail = state.selectedVideoHTML;
  VideoList = state.videosHTML;
  var VideoSection = VideoDetail + VideoList;
  $('#video-section').html(VideoSection);
  var listItems = [].slice.call(document.querySelectorAll('.list-group-item'));
  listItems.map(function(item, i){
    return item.addEventListener('click', function(){ vidsPlayer(i)});
  });
}

initRender();