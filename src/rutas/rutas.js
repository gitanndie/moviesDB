import React,{ Component } from 'react'

import { Route } from 'react-router-dom'
import ListMovie from '../movie/list-movie'
import Home from '../home/home'

class Rutas extends Component {
  render(){
    return(
      <div>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/populares" component={ ()=>(
          <ListMovie
            apiUrl={this.props.popular}
            section="Películas Populares"
            color= "white"
            handleOpen={ this.props.handleOpen }
          />)
        }
        />
        <Route path="/valorados" component={()=>(
          <ListMovie
            apiUrl={this.props.valorados}
            section="Películas Más Valoradas"
            color= "white"
            handleOpen={ this.props.handleOpen }
          />)
        }
        />
        <Route path="/estrenos" component={()=>(
          <ListMovie
            apiUrl={this.props.proximos}
            section="Próximos Estrenos"
            color= "white"
            handleOpen={ this.props.handleOpen }
          />)
        }
      />
    </div>
    )
  }
}

export default Rutas
