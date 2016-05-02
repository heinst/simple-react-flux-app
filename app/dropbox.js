var React = require('react');
var Store = require('./Store.js');
var actions = require('./actions.js');
var Dispatcher = require('./ColorDispatcher.js')
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var br = require('react-router').browserHistory

var Dropbox = React.createClass({
  handleSelect : function(event) {
    console.log(this.props);
    br.push("?color=" + event.target.value);
    Dispatcher.dispatch({
        actionName: 'changeColor',
        newItem: { color: event.target.value } // example data
    });
  },
	render: function() {
		return (
			<div>
        <select onChange={this.handleSelect}>
          {this.props.items.map(function(item){
            return (<option value={item}>{item}</option>);
          })};
        </select>
      </div>
		);
	}

});

module.exports = Dropbox;
