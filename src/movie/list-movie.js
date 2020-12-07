import React, { Component } from 'react'
import aja from 'aja'
import './list-movie.css'
import ModalContainer from '../modal/modal-container'
import Modal from '../modal/modal'
import Movie from './movie'
import BtnNext from '../movie/btn-next'
import YouTube from 'react-youtube'
class ListMovie extends Component{
  state = {
    list:[],
    page:1,
    video:'',
    modalVisible:false
  }
  /*evento para el cerrar el modal*/
  handleCloseModal = (event) =>{
		this.setState({
			modalVisible: false,
		})
	}
  /*evento para abrir el modal*/
	handleOpenModal = (event) =>{
    this.setState({
			modalVisible: true,
		})
	}
  /* evento para obtener videos por id (cuando hacemos click en un item)*/
  getVideos = (event)=>{
    let id = event.target.id;
    let self = this;
    aja()
    .url(`https://api.themoviedb.org/3/movie/76341${id}/videos?api_key=6723abcb736dade2ce411013316b9e8f&language=en-US`)
    .method('get')
    .on('success', function(data){
      //cuando llega respuesta
      console.log(data)
      self.newVideos(data.results)
    })
    .on('error',function(err){
      //cuando ocurre un error
      console.log('se perdio la conexion a internet');
    })
    .go();
  }
  /*evento para asignar los videos cargados por getVideos*/
  newVideos = (videos)=>{
    let video = {
      video:videos[0].key
    }
    this.setState(video,function(){
      this.handleOpenModal()
    });
  }
  /*evento para subir la navegación hacia arriba*/
  scrollToTop= (scrollDuration)=> {
      var cosParameter = window.scrollY / 2,
          scrollCount = 0,
          oldTimestamp = performance.now();
      function step (newTimestamp) {
          scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
          if (scrollCount >= Math.PI) window.scrollTo(0, 0);
          if (window.scrollY === 0) return;
          window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
          oldTimestamp = newTimestamp;
          window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
  }
  /* evento para obtener listado de peliculas*/
  getMovies = ()=>{
    let url = this.props.apiUrl+this.state.page
    let self = this
    aja()
      .url(url)
      .method('get')
      .on('success', function(data){
        //cuando llega respuesta
        console.log(data)
        self.newMovies(data.results)
      })
      .on('error',function(err){
        //cuando ocurre un error
        console.log('se perdio la conexion a internet')
      })
      .go();
  }
  /*evento para asignar los videos cargados por getMovies (items de peliculas)*/
  newMovies = (movies) =>{
    this.setState({
      list:movies
    });
    this.scrollToTop(100)
  }
  /*evento despues de montar el componente*/
  componentDidMount(){
    this.getMovies()
  }
  /*evento para cargar siguiente pagina del listado de peliculas*/
  nextMovies = (event) => {
    var page = {page:this.state.page+1}
    this.setState(page,function(){
      this.getMovies()
    })
  }
  /* evento video */
  _onReady(event) {
    console.log(event.target)
    event.target.playVideo()
  }
  render(){
    return (
      <div>
        <div className="ListMovie">
          <h1 className="ListMovie-title" style={ {color:this.props.color} }>
            { this.props.section }
          </h1>
          {
            this.state.list.map(
              (el,key)=>{
                return (
                  <Movie key={key} titulo={ el.title } id={el.id} image={ el.poster_path } handleOpen={ this.getVideos }/>
                )
              }
            )
          }
        </div>
        <div className="ListMovie-detail">
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal
                handleClose = { this.handleCloseModal }
                >
                  <YouTube
                    videoId={ this.state.video }
                    opts={
                      {
                        height: '390',
                        width: '640',
                        playerVars: {
                          autoplay: 1
                        }
                      }
                    }
                    onReady={this._onReady}
                  />
              </Modal>
            </ModalContainer>
            }
        </div>
        <BtnNext handleNext={ this.nextMovies } />
    </div>
    )
  }
}

export default ListMovie
