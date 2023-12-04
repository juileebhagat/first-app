import React from 'react'
//import vi1 from '../images/movieimage.webp'
import '../styles/youtube/Video.css'

function Video(props) {
  return (
    <div className='video-container'>
    <div className="thumbnail">
          <img src={props.image} alt="" style={{height:"100%" , width:"100%"}} />
    </div>
    <div className="video-info">
      <div className="channel-image">

      </div>
      <div className="channel-info">
          <h3 className="video-title" style={{marginTop: "4px"}}>
           {props.title}
          </h3>
          <p className='channel-name' style={{marginTop: "4px"}}>{props.channel}</p>
          <p className='view-count' style={{marginTop: "4px"}}><span className="views">{props.views} </span>
          <span className="upload-time" style={{marginTop: "4px"}}></span>{props.uptime}</p>
      </div>
    </div>
  </div>
  )
}

export default Video

