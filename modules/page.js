export function renderMovies(movie, storage, functionFavorite, functionRemove) {
    const ul = document.createElement('ul');
    main.appendChild(ul);

    const li = document.createElement('li');
    li.className = 'movie-card';
    ul.appendChild(li);

    const figure = document.createElement('figure');
    figure.className = 'movie-logo';
    li.appendChild(figure);

    let img = document.createElement('img');
    img.setAttribute('src', `https://image.tmdb.org/t/p/w500/${movie.poster_path}`);
    img.setAttribute('alt', `Logo do filme ${movie.title || movie.name}`);
    figure.appendChild(img);

    const div = document.createElement('div');
    div.className = 'movie-title-box';
    li.appendChild(div);

    const h2 = document.createElement('h2');
    h2.textContent = movie.title || movie.name;
    div.appendChild(h2);

    const div2 = document.createElement('div');
    div2.className = 'star-favorite-div';
    div.appendChild(div2);

    const div3 = document.createElement('div');
    div2.appendChild(div3);

    img = document.createElement('img');
    img.setAttribute('src', 'images/Star.svg');
    img.setAttribute('alt', 'Avaliação geral do filme');
    div3.appendChild(img);

    let span = document.createElement('span');
    span.textContent = movie.vote_average.toFixed(1);
    div3.appendChild(span);

    const div4 = document.createElement('div');
    div2.appendChild(div4);

    img = document.createElement('img');
    img.setAttribute('src', './images/Heart.svg');
    img.setAttribute('alt', 'Favoritar Filme');
    img.setAttribute('data-heart', '');
    img.className = 'heart';   
    div4.appendChild(img);
    
    span = document.createElement('span');
    span.textContent = 'Favoritar';
    div4.appendChild(span);
    
    const p = document.createElement('p');
    if(movie.overview != '') {
        p.textContent = movie.overview;
    } else {
        p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    }
    
    li.appendChild(p);
    storage.forEach(item => {
        const repeatedItemName = item.title || item.name;
        if(movie.title == repeatedItemName) {
            img.src = './images/Heart-filled.svg';
        } 
    })

    img.addEventListener('click', (e) => {
        
       if(img.src.includes('Heart.svg')) {
        img.src = './images/Heart-filled.svg';
        functionFavorite(movie, storage);

       } else {
        img.src = './images/Heart.svg';
        functionRemove(movie, storage);
       
       }
    })
}
