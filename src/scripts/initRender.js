import state from './state';
import getVids from './getVids';
function searchVids(e){
  e.preventDefault();
  state.term = e.target.children[0].value;
  getVids(state.term);
}

function initRender(){
  const SearchBar = `<form class="search-bar"><input placeholder="Let's search the youtube verse" /></form>`;
  const App = `'<section>${SearchBar}</section><section id="video-section"></section>`;
  document.getElementById('container').innerHTML = App;
  document.querySelector('.search-bar').addEventListener('submit', searchVids);
}

export default initRender;
