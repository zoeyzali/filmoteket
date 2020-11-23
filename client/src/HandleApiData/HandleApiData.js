const api_key = process.env.REACT_APP_API_KEY

export const getBerlinaleFilms = () => {
    const URL = `https://api.themoviedb.org/4/list/112863?api_key=${api_key}`;
    // let page;
    // for (page = 0; page < 2; page++)
    return fetch( URL + "&page=" )
        .then( function ( response ) {
            return response.json();
        } )
        .catch( err => console.log( err, 'oh noes error' ) )
}

export const pageTwoBerlinale = () => {
    return fetch( `https://api.themoviedb.org/4/list/112863?api_key=api_key=${api_key}&page=2` )
        .then( function ( response ) {
            return response.json();
        } )
        .catch( err => console.log( err, 'error again page2' ) )
}