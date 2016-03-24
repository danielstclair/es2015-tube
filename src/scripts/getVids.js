import axios from 'axios';
import key from './api_key';
import state from './state';
import vidsList from './vidsList';
function getVids(q) {
  const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
  const params = {
    part: 'snippet',
    key: key,
    q,
    type: 'video'
  };
  axios.get(ROOT_URL, { params })
    .then((videos) => {
      console.log(videos);
      state.videos = [...videos.data.items];
      vidsList(state.videos);
    });
}

export default getVids;