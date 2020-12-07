import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';
import Movie from '../movie/movie';
import PopularFlyer from './populares.jpg';
import ValoradosFlyer from './valorados.jpg';
import EstrenosFlyer from './estrenos.jpg';

const Home = ()=>(
  <div className="Home">
    <h2>
      Bienvenidos al portal de películas
    </h2>
    <Link to="/populares" target="_blank">
      <Movie imageLocal={PopularFlyer} titulo="Populares"/>
    </Link>
    <Link to="/valorados" target="_blank">
      <Movie imageLocal={ValoradosFlyer} titulo="Valorados"/>
    </Link>
    <Link to="/estrenos" target="_blank">
      <Movie imageLocal={EstrenosFlyer} titulo="Estrenos"/>
    </Link>
    <h6>
      Prueba Técnica: Andrea González Mantilla
    </h6>
  </div>
);

export default Home;
