export async function searchBar(value) {
    try {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjFmMGM5ZmRmNzE1OWMyNDc1ZTBjNTM3MWJjZjU5NSIsInN1YiI6IjY0NjU3NjIyYzM1MTRjMDEzYTU0MTI3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.81tHX3gKeqLmy-GYbFkRXyp3wtDYxWbXJXAVPgxIfLQ'
            }
          };
          
          const request = await fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&page=1`, options);
          const response = await request.json();
    
          return response.results;

    } catch(err) {
        console.log('Erro ao filtrar filmes');

    }
    
}
