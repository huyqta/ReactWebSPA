var React = require('react');
var ReactDOM = require('react-dom');
var HomePage = require('HomePage');
var AboutUs = require('AboutUs');
var Contact = require('Contact');
var Main = require('Main');
import { BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom';
// import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
// var index2 = require('./index0.js');

ReactDOM.render(
  <HashRouter>
    <div>
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

      <hr />
      <hr />

      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutUs} />
      <Route path="/contact" component={Contact} />
    </div>
  </HashRouter>,
  document.getElementById('root')
);
