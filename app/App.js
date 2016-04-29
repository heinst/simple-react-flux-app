var React = require('react');
var Store = require('./Store.js');
var actions = require('./actions.js');

var Combobox = React.createClass({
  getInitialState: function () {
    return {
      color1: 'red',
      color2: 'green',
      color3: 'blue',
      color4: 'yellow'
    };
  },
  componentWillMount: function () {
    Store.addChangeListener(this.changeState);
  },
  componentWillUnmount: function () {
    Store.removeChangeListener(this.changeState);
  },
  changeState: function () {
    this.setState({
      colors: Store.getColors()
    });
  },
	render: function() {
		return (
			<div>
        <select>
          <option value={this.state.color1}>{this.state.color1}</option>
          <option value={this.state.color2}>{this.state.color2}</option>
        </select>
        <select>
          <option value={this.state.color3}>{this.state.color3}</option>
          <option value={this.state.color4}>{this.state.color4}</option>
        </select>
      </div>
		);
	}

});

module.exports = Combobox;
