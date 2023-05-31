export async function apiConnect() {
    try {
        const url = 'https://api.themoviedb.org/3/trending/all/week?api_key=221f0c9fdf7159c2475e0c5371bcf595';
        const request = await fetch(url);
        const response = await request.json();

        return response.results;
    } catch(err) {
        console.log('Erro ao carregar os filmes');
    }
    
}
