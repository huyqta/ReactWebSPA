var React = require('react');
var ReactDOM = require('react-dom');
var HomePage = require('HomePage');
var AboutUs = require('AboutUs');
var Contact = require('Contact');
var Main = require('Main');
var Header = require('Header');
var Footer = require('Footer');
import { BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom';
// import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
// var index2 = require('./index0.js');

ReactDOM.render(
  <div>
    <Header />
    <section className='app-content'>
      <div className='row'>
        <div className='col-md-12'>
          <HashRouter>
            <div>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutUs} />
              <Route path="/contact" component={Contact} />
            </div>
          </HashRouter>
        </div>
      </div>
    </section>
    <Footer />
  </div>
  ,
  document.getElementById('root')
);
