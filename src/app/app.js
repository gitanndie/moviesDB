import React from 'react';
import Menu from '../menu/menu';
import Rutas from '../rutas/rutas';
import './app.css';

function App(){
  const api_key = '6723abcb736dade2ce411013316b9e8f';
  const apiUrl = {
    popular:`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es-ES&page=`,
    valorados:`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=`,
    proximos:`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=`
  }
  return (
    <div>
      <Menu/>
      <Rutas {...apiUrl}/>
    </div>
  )
}

export default App;
