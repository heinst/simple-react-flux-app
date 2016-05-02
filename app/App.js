var React      = require('react');
var Store      = require('./Store.js');
var actions    = require('./actions.js');
var Dropbox    = require('./dropbox.js');
var ColorBox   = require('./ColorBox.js');


var Combobox = React.createClass({
  getInitialState: function () {
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
      colors: Store.getColor()
    });
  },
	render: function() {
		return (
			<div>
        <Dropbox items={['red', 'green', 'beige', 'The blood of angry men']} />
        <ColorBox/>
      </div>
		)
	}

});

module.exports = Combobox;
