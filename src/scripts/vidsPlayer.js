import state from './state';
import vidsRender from './vidsRender';
function vidsPlayer(num) {
  const { id, snippet: piece } = state.videos[num];
  const videoUrl = `https://www.youtube.com/embed/${id.videoId}`;
  const VideoDetail =  `<div class="video-detail col-md-8">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" allowfullscreen="allowfullscreen" src="${videoUrl}"></iframe>
    </div>
    <div class="details">
      <h6>${piece.title}</h6>
      <span>${piece.description}</span>
    </div>
  </div>`;
  state.selectedVideo = state.videos[num];
  state.selectedVideoHTML = VideoDetail;
  vidsRender();
}

export default vidsPlayer;