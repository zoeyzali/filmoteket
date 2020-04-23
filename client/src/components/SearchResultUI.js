import React from 'react'
import { Link } from 'react-router-dom'

/** Search ResultListUI Link to Details*/
const SearchResultUI = ( props ) => {
    console.log( props, "props Search result UI" )
    return (
        <div className="search-inner">
            <Link to={`/movies/berlinale/${props.filmId}`}
                onClick={() => props.viewFilmInfo( props.filmId )}>
                {props.image === null ?
                    <img src={`https://dummyimage.com/w185/333/fff.png&text=No+image`}
                        className="img-fluid posters" alt={props.image}
                    />
                    :
                    <img src={`https://image.tmdb.org/t/p/w185/${props.image}`
                    } className="img-fluid posters" alt={props.image}
                    />
                }
            </Link>
        </div>
    )
}


export default SearchResultUI