// var React = require('react');
var ReactDOM = require('react-dom');
var HomePage = require('HomePage');
var AboutUs = require('AboutUs');
var Contact = require('Contact');

import React from 'React';
import { BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom';

var pStyle = {
  width: '50%',
  display: 'inline-block'
};

class Header extends React.Component{
  render(){
    return(
      <header>
        
      </header>
    )
  }
}

module.exports = Header;
