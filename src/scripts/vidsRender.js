import state from './state';
import vidsPlayer from './vidsPlayer';

function vidsRender(VideoDetail, VideoList) {
  VideoDetail = state.selectedVideoHTML;
  VideoList = state.videosHTML;
  const VideoSection = VideoDetail + VideoList;
  document.getElementById('video-section').innerHTML = VideoSection;
  [].slice.call(document.querySelector('.list-group-item')).map((item, i) => {
    item.addEventListener('click', () => {
      vidsPlayer(i);
    });
  });
}

export default vidsRender;