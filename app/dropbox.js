var React = require('react');
var Store = require('./Store.js');
var actions = require('./actions.js');
var Dispatcher = require('./ColorDispatcher.js')

var AppDispatcher = new Dispatcher();

var Dropbox = React.createClass({
  handleSelect : function(event) {

    console.log(event.target.value);
    AppDispatcher.dispatch({
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
