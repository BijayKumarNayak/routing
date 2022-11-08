import React from 'react'
import { Link } from 'react-router-dom'


function Masterlayout(props) {
  return (
    <div>
    <header id='header'>
    <h3>Brand name</h3>
    <div className='link'>
    <Link to= "/">Home</Link>
    <Link to= "/contact">contact</Link>
    <Link to= "/about">about</Link>
    </div>

    
   
    </header>
    <section>{props.children}</section>
    <footer id='footer'><h4><i>COPYRIGHT @BIJAY</i></h4></footer>

      
    </div>
  )
}

export default Masterlayout
