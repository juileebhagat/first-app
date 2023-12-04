import React from 'react'
import NavigationBar from './NavigationBar'
import AllVideos from '../AllVideos'

const YouTube = () => {
  return (
    <div style={{backgroundColor: "black", color: "white", padding: "0 20px", width:"100vw"}}>
      <NavigationBar/>
      <AllVideos/>
    </div>
  )
}

export default YouTube
