// import React from 'react'
// import { Col } from 'reactstrap'
// import { Link } from 'react-router-dom'

// const FilmsBerUI = ( props ) => {
//     console.log( props, "props" )

//     return (
//         props.films.map( ( film ) => {
//             console.log( film, "filmslist?" )
//             return (
//                 <Col key={props.filmId} xs={2} md={2} lg={2} className="films-row">
//                     <Link to="#" onClick={() => props.viewFilmInfo( props.filmId )}>
//                         <img src={`https://image.tmdb.org/t/p/w185/${props.poster_path}`}
//                             className="img-fluid"
//                             alt={props.title}
//                         />
//                     </Link>
//                 </Col>
//             )
//         }
//         )
//     )
// }


// export default FilmsBerUI