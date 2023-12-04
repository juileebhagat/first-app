import React from 'react'
import './MyNewComponent.css'

const MyNewComponent = () => {

    let name = "Snehal";
    let city = "Mumbai";

    let name2 = "Pratiksha";
    let city2 = "Nagpur";

    let person1 = {
      name: "Jui",
      city: "Banglore"
    }

    let person2 ={
      name: "Akshay",
      city: "Chennai"
    }

    let mystyle = {
      color: "red",
      margin: "0 30px"
    }

    let heading3 ={
      color: "blue", marginLeft:"50px"
    }
  return (
    <>
    <div>
      <h2 style={mystyle}>Welcome {name}</h2>
      <h3 style={{color: "blue", margin: "0 30px"}}>City: {city}</h3>
    </div>

    <div>
      <h2 style={mystyle}>Name: {name2}</h2>
      <h3 style={heading3}>City: {city2}</h3>
    </div>

    <div>
      <h2 className='heading'>Name: {person1.name}</h2>
      <h3 className='city'>City: {person1.city}</h3>
    </div>
    <div>
      <h2>Name: {person2.name}</h2>
      <h3>City: {person2.city}</h3>
    </div>
    
    </>
  )
}

export default MyNewComponent
