var React = require('react');
var Store = require('./Store.js');
var test = {
  backgroundColor:'white',
  width: '200px',
  height: '200px'
}
var ColorBox = React.createClass({

  getInitialState: function () {
    return {
      color: Store.getColor()
    };
  },
	render: function() {
		return (
			<div style={test}>
      </div>
		);
	}
});

module.exports = ColorBox;
