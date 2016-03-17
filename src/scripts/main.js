import '../styles/main.scss';
import '../../index.html';

import $ from 'jquery';
import YTSearch from 'youtube-api-search';
import API_KEY from './api_key';

var SearchBar = '<form class="search-bar"><input placeholder="Let\'s search the youtube verse" /></form>';
var VideoDetail = '';

function searchVids (term) {
  YTSearch({key: API_KEY, term: term}, function(videos){
    console.log('videos ' , videos);
    var videoUrl = 'https://www.youtube.com/embed/' + videos[0].id.videoId;
    VideoDetail =  '<div class="video-detail col-md-8"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" allowfullscreen="allowfullscreen" src=' + videoUrl + '></iframe></div><div class="details"><h6>' + videos[0].snippet.title + '</h6><span>' + videos[0].snippet.description +'</span></div></div>';
    render(VideoDetail);
  });
}

function changeSearch(e){
  e.preventDefault();
  console.log(e.target.children[0].value);
  searchVids(e.target.children[0].value);
}



function render(video){
  var App = video !== '' ? '<div>' + SearchBar + VideoDetail +'</div>' : '<div>' + SearchBar + '</div>';
  $('#container').html(App);
  $('.search-bar').on('submit', changeSearch);
}

// searchVids('surfboards')
render();