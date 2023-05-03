import React from 'react';

const Film = ({film}) => {
    return ( 
        <>
            <nav>
                <li><a href={film.url}> {film.name}</a></li>
            </nav>
        </>
     );
}
 
export default Film;