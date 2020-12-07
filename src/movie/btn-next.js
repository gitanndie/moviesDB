import React from 'react'
import './btn-next.css'

const BtnNext = (props)=>(
  <div onClick={ props.handleNext } className="btnNext">
    Siguiente
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M19.9 12.4c.1-.2.1-.5 0-.8l-.2-.3-7-7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.3 5.3H5c-.6 0-1 .4-1 1s.4 1 1 1h11.6l-5.3 5.3a1 1 0 0 0 0 1.4c.2.2.5.3.7.3s.5-.1.7-.3l7-7 .2-.3z"/>
    </svg>
  </div>
  
);
export default BtnNext
