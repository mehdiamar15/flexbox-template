import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

let templateStyle = require('../../template.json');

const Home = () => {
    return (
        <div>
            <h1>Responsive Flexbox Template</h1>
            <h3>A freebie by Tutorialzine.</h3>
            <Link to="/Contact" className="btn">
               Contact Us
            </Link>
        </div>

    )
}

export default Home;
