// @flow 
export const getMovies = async () => {
    let movies = null;
    let res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6976f22cd306c697e7e577613b6bf75e&page=1')
    movies =await res.json();
    return {
        type :'GET_MOVIES',
        payload : movies || []
    }
};

export const getDetails = async (id=0) => {
    let detail = null;
    let res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6976f22cd306c697e7e577613b6bf75e`)
    detail =await res.json();
    return {
        type :'GET_DETAILS',
        payload : detail || {}
    }
};