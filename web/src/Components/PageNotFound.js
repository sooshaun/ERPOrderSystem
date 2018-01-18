import React, { Component } from 'react'
import { Link } from 'react-router-dom'


// export default ((location) => (
//   <h1>Page not found. {location.pathname}</h1>
//   <Link to='/'>Click Here back to home page</Link>
//   )
// )

const pageNotFound = () => {
  const page = {
    // backgroundColor: '#888',
    margin: ' 100px auto',
    textAlign: 'center',
    width: '900px',
    height: '400px',
    border: '1px solid red',

  }
  const Ooops = {
    padding: '20px 0px',
    fontSize: '50px',

  }
  const error = {
    fontSize: '30px',
  }

  return (
    < div style={page}>
      <h1 style={Ooops}>Ooops ! </h1>
      <h1 style={error}>Error 404.</h1>
      <h2 style={error}>We are sorry. Page not found ! </h2>
      <p style={error}>Please click <Link to='/'>here</Link> here to go back to homepage</p>
    </div >
  )
}


export default pageNotFound
