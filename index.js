import { apiConnect } from  './modules/api.js';
import { renderMovies } from './modules/page.js'
import { searchBar } from './modules/searchBar.js';
import { favoriteMovie, removeFavoriteMovie } from './modules/favorites.js';

const storage = JSON.parse(localStorage.getItem('Movies')) || [];

const movies = await apiConnect();
const main = document.querySelector('#main');
const searchElement = document.querySelector('#search-input');
const checkbox = document.querySelector('#checkbox-input');

movies.forEach(movie => renderMovies(movie, storage, favoriteMovie, removeFavoriteMovie));

searchElement.addEventListener('keyup', async (e) => {
    if(searchElement.value == '') {
        main.innerHTML = '';
        movies.forEach(movie => renderMovies(movie, storage, favoriteMovie, removeFavoriteMovie));

    } else {
        const filteredMovies = await searchBar(e.target.value);
        main.innerHTML = '';
        filteredMovies.forEach(movie => renderMovies(movie, storage, favoriteMovie, removeFavoriteMovie));

    }
});

checkbox.addEventListener('change', () => {
    if(checkbox.checked) {
        main.innerHTML = '';
        storage.forEach(movie => renderMovies(movie, storage, favoriteMovie, removeFavoriteMovie));

    } else {
        main.innerHTML = '';
        movies.forEach(movie => renderMovies(movie, storage, favoriteMovie, removeFavoriteMovie));

    }
})
