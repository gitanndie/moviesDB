import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

class Menu extends Component{
  getTabs(){
    return ['home','populares','valorados','estrenos'];
  }
  CheckTab = ()=>{
    let path = window.location.pathname.replace('/','');
    if(path===''){
      path='home';
    }
    this.setStyles(path);
  }
  Tab = (element)=>{
    var url = element.target.id;
    this.setStyles(url);
  }
  setStyles = (url)=>{
    for(let tab of this.getTabs()){
      if(url===tab){
        document.querySelector('#'+tab).className = "Menu-select";
      }else{
        document.querySelector('#'+tab).className = "Menu-unselect";
      }
    }
  }
  componentDidMount(){
    this.CheckTab();
  }
  render(){
    return(
      <div>
        <div className="ReactherLogo">
        </div>
        <div className="Menu-option">
          <ul onClick={ this.Tab }>
            <li>
              <Link to="/" id="home">Home</Link>
            </li>
            <li>
              <Link to="/populares" id="populares">Populares</Link>
            </li>
            <li>
              <Link to="/valorados" id="valorados">Más Valorados</Link>
            </li>
            <li>
              <Link to="/estrenos" id="estrenos">Próximos Estrenos</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Menu;
