import React from 'react'
import './movie.css'

const Movie = (props) =>(
    <div
      className="Movie"
      onClick={ props.handleOpen }
      id={props.id}>

      <img
        src={
          props.image ?
          'http://image.tmdb.org/t/p/w185/'+props.image:props.imageLocal
        }
        alt="imagen"
        id={props.id}
      />

      <h4
        id={props.id}
      >
        { props.titulo }
      </h4>
    </div>
)
export default Movie
