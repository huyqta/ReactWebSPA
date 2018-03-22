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
      </header>
    )
  }
}

module.exports = Header;
