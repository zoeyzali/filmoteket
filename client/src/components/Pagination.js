import React from 'react'
import { Link } from 'react-router-dom'


const Pagination = ( props ) => {
    const pageLinks = []
    for ( let i = 1; i <= props.pages + 1; i++ ) {
        let active = props.currentPage === i ? 'active' : '';
        pageLinks.push( <li className={`waves-effect ${active}`} key={i} onClick={() => props.nextPage( i )}>
            <Link to="#">{i}</Link></li>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <ul className="pagination">
                    {props.currentPage > 1 ? <li className={`waves-effect`} key={props.currentPage - 1} onClick={() => props.nextPage( props.currentPage - 1 )}>
                        <Link to="#">Prev</Link></li> : ""}
                    {pageLinks}
                    {props.currentPage < props.pages + 1 ? <li className={`waves-effect`} key={props.currentPage + 1} onClick={() => props.nextPage( props.currentPage + 1 )}><Link to="#">Next</Link></li> : ''}
                </ul>
            </div>
        </div>
    )
}

export default Pagination