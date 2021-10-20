import React , { Component } from 'react'
import './style.css'
let templateStyle = require('../../template.json');

const Home = () => {
    return(
        <div>
	<section className="hero" style={{backgroundImage:templateStyle.BackgrdImage}}>
		<div className="background-image" ></div>
		<h1>Responsive Flexbox Template</h1>
		<h3>A freebie by Tutorialzine.</h3>
		<a href="http://tutorialzine.com/2016/06/freebie-landing-page-template-with-flexbox/" class="btn">Contact Us</a>
	</section>


	</div>
    
        
    )
}

export default Home;
