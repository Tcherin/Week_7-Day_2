import React, {useState} from 'react'
import FilmList from '../components/FilmList';

const FilmBox = () => {

    const [films, setFilms] = useState([
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
          id: 2,
          name: "Life Itself",
          url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
      ])

    return (
        <div className='filmbox-container'>
            <div className='filmbox'>
            <h1>Upcoming Film Releases For UK</h1>
            <hr></hr>
            <FilmList films={films} />
            <h2><a href="https://www.imdb.com/">
                View More Upcoming Releases</a></h2>
            </div>
        </div>
    )

}

    export default FilmBox