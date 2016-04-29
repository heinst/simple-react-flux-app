var React      = require('react');
var Store      = require('./Store.js');
var actions    = require('./actions.js');
var Dropbox    = require('./dropbox.js');
var ColorBox   = require('./ColorBox.js');


var Combobox = React.createClass({
  getInitialState: function () {
    console.log(Store.getColor());
    return {
      color:Store.getColor()
    }
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
        <Dropbox items={['red', 'green', 'beige', 'The blood of angry men']} />
        <ColorBox/>
        <p>whut</p>
      </div>
		)
	}

});

module.exports = Combobox;
