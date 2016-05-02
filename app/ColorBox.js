var React = require('react');
var Store = require('./Store.js');
var Link = require('react-router').Link;
var Router = require('react-router').Router;

var ColorBox = React.createClass({
  componentDidMount() {
    Store.on('changeColor', this.onColorChange);
  },
  onColorChange: function(){
    console.log(this.props);
    this.setState({color: Store.getColor()});
    // window.location.href = "http://localhost:8000/color/" + this.state.color;
  },

  getInitialState: function () {
    // window.location.href = "http://localhost:8000/color/red";
    return {
      color: Store.getColor()
    };
  },
	render: function() {
    var style = {
      backgroundColor:this.state.color,
      width: '200px',
      height: '200px'
    };
		return (
      <div style={style}></div>
		);
	}
});

module.exports = ColorBox;
