import React from 'react'
import { Link } from 'react-router-dom'

/** Search Results UI Link to Details*/

const SearchResultUI = ( props ) => {
    return (
        <div className="search-inner">
            <Link to="#" onClick={() => props.viewFilmInfo( props.filmId )}>
                {props.image === null ? <img src={`https://dummyimage.com/w185/000/fff.png&text=No+images`
                } className="img-fluid" alt={props.image}
                />
                    :
                    <img src={`https://image.tmdb.org/t/p/w185/${props.image}`
                    } className="img-fluid" alt={props.image}
                    />
                }
            </Link>
        </div>
    )
}


export default SearchResultUI