import state from './state';
import vidsPlayer from './vidsPlayer';
function vidsList(videos){
  const VideoListItems = videos.map(function(video, i){
    const { thumbnails, title } = video.snippet;
    return `<li class="list-group-item">
      <div class="video-list media">
        <div class="media-left"><img class="media-object" src="${thumbnails.default.url}"/>
        </div>
      </div>
      <div class="media-body"><div class="media-heading">${title}</div>
    </div>
  </li>`;
  });
  const VideoList = `<ul class="col-md-4 list-group">${VideoListItems.join('')}</ul>`;
  state.selectedVideo = videos[0];
  state.videosHTML = VideoList;
  vidsPlayer(0);
}

export default vidsList;