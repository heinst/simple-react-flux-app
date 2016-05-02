var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./App.js');
var render =  require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;

ReactDOM.render((
   <Router history={browserHistory}>
     <Route path="/" component={App}/>
     <Route path="/?color=:color" component={App}/>
   </Router>
 ), document.body);
