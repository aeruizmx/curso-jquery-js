(async function load() {
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  function videoItemTemplate(movie) {
    return (
      `<div class="primaryPlaylistItem">
          <div class="primaryPlaylistItem-image">
            <img src="${movie.medium_cover_image}" alt="">
          </div>
          <h4 class="primaryPlaylistItem-title">
            ${movie.title}
          </h4>
        </div>`);
  }

  function createTemplate(HTMLString) {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
  }

  function renderMovieList(list, $container) {
    if($container.children[0]){
      $container.children[0].remove();
    }
    list.forEach((movie) => {
      const HTMLString = videoItemTemplate(movie);
      const movieElement = createTemplate(HTMLString);
      $container.append(movieElement);
    });
  }

  const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action');
  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList.data.movies, $actionContainer);

  const horrorList = await getData('https://yts.mx/api/v2/list_movies.json?genre=horror');
  const $horrorContainer = document.querySelector('#horror');
  renderMovieList(horrorList.data.movies, $horrorContainer);

  const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation');
  const $animationList = document.querySelector('#animation');
  renderMovieList(animationList.data.movies, $animationList);
  
  const $featuringContainer = document.querySelector('#featuring');

  const $form = document.getElementById('form');
  const $home = document.getElementById('home');

  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');

  const modalTitle = $modal.querySelector('h1')
  const modalImage = $modal.querySelector('img')
  const modalDescription = $modal.querySelector('p')



})()
