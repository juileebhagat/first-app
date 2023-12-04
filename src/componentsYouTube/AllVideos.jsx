import React from 'react'
import Video from './Video'
import vi1 from '../images/movieimage.webp'
import img1 from '../images/image1.webp'

function AllVideos() {
  const allVideoStyle = {
      
        display: "flex",
        flexWrap: "wrap",
        marginTop: "10px"
    }

    let myVideo = [
      {
        
      }
    ]
  return (
    <div style={allVideoStyle}>
      {/* <Video 
      image={vi1} 
      title=" Thalapathy Vijay's PROFESSOR Blockbuster Hindi Dubbed Full Movie | Vijay Sethupathi, Malvika Mohanan "
      channel="Grand Master Movies"
      views="44M "
      uptime="4 Months ago"
      />
      <Video
      image={img1} 
      title=" Custody Full Movie | 2023 New Released Hindi Dubbed Movie | Naga Chaitanya, Krithi Shetty, Priyamani "
      channel="RKD Studios"
      views="30M "
      uptime="11 Days ago"
      /> */}
      <Video/>
      <Video/>
      <Video/>
    </div>
  )
}

export default AllVideos




