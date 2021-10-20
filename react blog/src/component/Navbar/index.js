import React , { Component } from 'react'
import { Link,NavLink } from 'react-router-dom'
import './style.css'
let templateStyle = require('../../template.json');

const Navbar = () => {
    return(
            
                <header style={{ backgroundColor: templateStyle.NavbarBckColor }}>
		<h2><a href="#">Website Logo</a></h2>
		<nav>
			<li><NavLink to="/">Home</NavLink></li>
			<li><NavLink to="/Privacy">Privacy</NavLink></li>
			<li><NavLink to="/Unsubscribe">Unsubscribe</NavLink></li>
			<li><NavLink to="/Contact">Contact</NavLink></li>

		</nav>
	</header>
        
            
   
    
    )
}

export default Navbar;
