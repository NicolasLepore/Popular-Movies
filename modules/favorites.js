export function favoriteMovie(movie, storage) {
   storage.push(movie);
   localStorage.setItem('Movies', JSON.stringify(storage));
}

export function removeFavoriteMovie(movie, storage) {
   storage.forEach((item, index) => {
      if(movie.id === item.id) {
         storage.splice(index, 1);
         localStorage.setItem('Movies', JSON.stringify(storage));
      }
   })
}