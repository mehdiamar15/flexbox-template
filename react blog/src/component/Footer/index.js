import React , { Component } from 'react'
import './style.css'
import { FooterSection,FooterDesc } from "./style.js";

const Footer = () => {
    return(
        
<footer>
<ul>
<li><a href="#"><i class="fa fa-twitter-square"></i></a></li>
<li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
<li><a href="#"><i class="fa fa-snapchat-square"></i></a></li>
<li><a href="#"><i class="fa fa-pinterest-square"></i></a></li>
<li><a href="#"><i class="fa fa-github-square"></i></a></li>

<p>Made by <a href="http://tutorialzine.com/" target="_blank">tutorialzine</a>. images courtesy to <a href="http://unsplash.com/" target="_blank">unsplash</a>.</p>
		<p>No attribution required. you can remove this footer.</p>


</ul>
	</footer>

    )
}

export default Footer;
