// var React = require('react');
var ReactDOM = require('react-dom');
var HomePage = require('HomePage');
var AboutUs = require('AboutUs');
var Contact = require('Contact');

import React from 'React';
import { BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom';

class Header extends React.Component{
  render(){
    return(
      <header>
        <div className="top-header">
          <div className="row">
            <div className="col-md-6 text-center">
                <span>Address: 146 Trieu Nu Vuong</span>
            </div>
            <div className="col-md-6 text-center">
                <span>Phone: 084 236 3689696</span>
            </div>
          </div>
        </div>
        <div className="nav-container">
          <div className="nav">
            <div className='row'>
              <div className='col-md-6 text-left'>
                <img className='logo' src='/images/logo_text.png' />
              </div>
              <div className='col-md-6 text-center'>
                <HashRouter>
                  <ul>
                    <li>
                      <Link to="/">HomePage</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </HashRouter>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
        <div>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item item active">
                <img src="images/slides/slider-slide-3-1464x660.jpg" alt="Los Angeles" />
              </div>

              <div className="carousel-item item">
                <img src="images/slides/slider-slide-3-1464x660.jpg" alt="Los Angeles" />
              </div>

              <div className="carousel-item item">
                <img src="images/slides/slider-slide-3-1464x660.jpg" alt="Los Angeles" />
              </div>
            </div>
            <a className="carousel-control-prev left carousel-control" href="#myCarousel" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next right carousel-control" href="#myCarousel" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </header>
    )
  }
}

module.exports = Header;
