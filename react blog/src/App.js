import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css'
import Subscribe from "./component/Subscribe";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Index from "./component/Index";
import Privacy from "./component/Privacy";
import Footer from './component/Footer';
import Unsubscribe from './component/Unsubscribe';

let templateStyle = require('./template.json');

class App extends Component {

    render() {
        return (


            <BrowserRouter style={{backgroundImage: `url("./backgroud_images/hero.jpg")`}}>

                <Navbar/>
                <section className="hero" style={{backgroundImage: templateStyle.global.BackgrdImage}}>

                    <Route exact path='/' component={Index}/>
                    <Route path='/Contact' component={Contact}/>
                    <Route path='/Privacy' component={Privacy}/>
                    <Route path='/Unsubscribe' component={Unsubscribe}/>
                </section>

                <Subscribe/>
                <Footer/>

            </BrowserRouter>


        )
    }
}

export default App;
