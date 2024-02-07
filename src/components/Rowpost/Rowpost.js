import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../contants/contants';

function Rowpost(props) {
  const [movies, setmovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setmovies(response.data.results)
    })

  }, [])


  return (
    <div className='Row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl + movie.backdrop_path}`} />
        ))}
      </div>

    </div>
  )
}

export default Rowpost
