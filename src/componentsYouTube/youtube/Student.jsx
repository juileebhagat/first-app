import React from 'react'
import PropTypes from 'prop-types'; 

function Student({name, dob, city}) {

    // console.log(props)
  return (
    <div style={{border: "1px solid red", width:"500px", margin:"10px", padding:"10px"}}>
      <h3 style={{color: "orange", fontSize: "36px"}}>Name: {name}</h3>
      <p style={{color: "green", fontSize: "28px"}}>DOB: {dob}</p>
      <p style={{color: "blue", fontSize: "28px"}}>City: {city}</p>
    </div>
  )
}

Student.PropTypes = {
  name: PropTypes.string.isRequired,
  dob: PropTypes.string,
  city: PropTypes.string
}

Student.defaultProps = {
  name: 'enter name',
  age: 'enter age',
  city: 'enger city'
}

export default Student

