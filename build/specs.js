(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/trevorheins/Downloads/flux-react-boilerplate-master/app/App.js":[function(require,module,exports){
'use strict';

var React = require('react');
var Store = require('./Store.js');
var actions = require('./actions.js');

var Combobox = React.createClass({
  displayName: 'Combobox',

  getInitialState: function getInitialState() {
    return {
      color1: 'red',
      color2: 'green',
      color3: 'blue',
      color4: 'yellow'
    };
  },
  componentWillMount: function componentWillMount() {
    Store.addChangeListener(this.changeState);
  },
  componentWillUnmount: function componentWillUnmount() {
    Store.removeChangeListener(this.changeState);
  },
  changeState: function changeState() {
    this.setState({
      colors: Store.getColors()
    });
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'select',
        null,
        React.createElement(
          'option',
          { value: this.state.color1 },
          this.state.color1
        ),
        React.createElement(
          'option',
          { value: this.state.color2 },
          this.state.color2
        )
      ),
      React.createElement(
        'select',
        null,
        React.createElement(
          'option',
          { value: this.state.color3 },
          this.state.color3
        ),
        React.createElement(
          'option',
          { value: this.state.color4 },
          this.state.color4
        )
      )
    );
  }

});

module.exports = Combobox;

},{"./Store.js":"/Users/trevorheins/Downloads/flux-react-boilerplate-master/app/Store.js","./actions.js":"/Users/trevorheins/Downloads/flux-react-boilerplate-master/app/actions.js","react":"react"}],"/Users/trevorheins/Downloads/flux-react-boilerplate-master/app/Store.js":[function(require,module,exports){
'use strict';

var flux = require('flux-react');
var actions = require('./actions.js');

module.exports = flux.createStore({
  colors: [],
  actions: [actions.changeColor],
  changeColor: function changeColor(color) {
    for (var i = 0; i < colors.length; i++) {
      if (colors[i] === color) {
        colors[i] = color;
      }
    }
  },
  storeColor: function storeColor(color) {
    this.colors.push(color);
    this.emitChange();
  },
  exports: {
    getColors: function getColors() {
      return this.colors;
    }
  }
});

},{"./actions.js":"/Users/trevorheins/Downloads/flux-react-boilerplate-master/app/actions.js","flux-react":"flux-react"}],"/Users/trevorheins/Downloads/flux-react-boilerplate-master/app/actions.js":[function(require,module,exports){
'use strict';

var flux = require('flux-react');

module.exports = flux.createActions(['changeColor']);

},{"flux-react":"flux-react"}],"/Users/trevorheins/Downloads/flux-react-boilerplate-master/specs/App-spec.js":[function(require,module,exports){
"use strict";

var App = require('./../app/App.js');
var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

describe("App", function () {

  it("should be wrapped with a div", function () {
    var app = TestUtils.renderIntoDocument(React.createElement(App, null));
    expect(app.getDOMNode().tagName).toEqual('DIV');
  });
});

},{"./../app/App.js":"/Users/trevorheins/Downloads/flux-react-boilerplate-master/app/App.js","react/addons":"react/addons"}]},{},["/Users/trevorheins/Downloads/flux-react-boilerplate-master/specs/App-spec.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdHJldm9yaGVpbnMvRG93bmxvYWRzL2ZsdXgtcmVhY3QtYm9pbGVycGxhdGUtbWFzdGVyL2FwcC9BcHAuanMiLCIvVXNlcnMvdHJldm9yaGVpbnMvRG93bmxvYWRzL2ZsdXgtcmVhY3QtYm9pbGVycGxhdGUtbWFzdGVyL2FwcC9TdG9yZS5qcyIsIi9Vc2Vycy90cmV2b3JoZWlucy9Eb3dubG9hZHMvZmx1eC1yZWFjdC1ib2lsZXJwbGF0ZS1tYXN0ZXIvYXBwL2FjdGlvbnMuanMiLCIvVXNlcnMvdHJldm9yaGVpbnMvRG93bmxvYWRzL2ZsdXgtcmVhY3QtYm9pbGVycGxhdGUtbWFzdGVyL3NwZWNzL0FwcC1zcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2xDLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFdEMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQy9CLGlCQUFlLEVBQUUsMkJBQVk7QUFDM0IsV0FBTztBQUNMLFlBQU0sRUFBRSxLQUFLO0FBQ2IsWUFBTSxFQUFFLE9BQU87QUFDZixZQUFNLEVBQUUsTUFBTTtBQUNkLFlBQU0sRUFBRSxRQUFRO0tBQ2pCLENBQUM7R0FDSDtBQUNELG9CQUFrQixFQUFFLDhCQUFZO0FBQzlCLFNBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7R0FDM0M7QUFDRCxzQkFBb0IsRUFBRSxnQ0FBWTtBQUNoQyxTQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0dBQzlDO0FBQ0QsYUFBVyxFQUFFLHVCQUFZO0FBQ3ZCLFFBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixZQUFNLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRTtLQUMxQixDQUFDLENBQUM7R0FDSjtBQUNGLFFBQU0sRUFBRSxrQkFBVztBQUNsQixXQUNDOzs7TUFDSzs7O1FBQ0U7O1lBQVEsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxBQUFDO1VBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1NBQVU7UUFDOUQ7O1lBQVEsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxBQUFDO1VBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1NBQVU7T0FDdkQ7TUFDVDs7O1FBQ0U7O1lBQVEsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxBQUFDO1VBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1NBQVU7UUFDOUQ7O1lBQVEsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxBQUFDO1VBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1NBQVU7T0FDdkQ7S0FDTCxDQUNSO0dBQ0Y7O0NBRUQsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDOzs7OztBQ3pDMUIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2pDLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFdEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQ2hDLFFBQU0sRUFBRSxFQUFFO0FBQ1YsU0FBTyxFQUFFLENBQ1AsT0FBTyxDQUFDLFdBQVcsQ0FDcEI7QUFDRCxhQUFXLEVBQUUscUJBQVMsS0FBSyxFQUFFO0FBQzFCLFNBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUNyQztBQUNJLFVBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFDdEI7QUFDRyxjQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO09BQ3BCO0tBQ0o7R0FDSDtBQUNELFlBQVUsRUFBRSxvQkFBVSxLQUFLLEVBQUU7QUFDM0IsUUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEIsUUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0dBQ25CO0FBQ0QsU0FBTyxFQUFFO0FBQ1AsYUFBUyxFQUFFLHFCQUFZO0FBQ3JCLGFBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNwQjtHQUNGO0NBQ0YsQ0FBQyxDQUFDOzs7OztBQzFCSCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7O0FBRWpDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUNsQyxhQUFhLENBQ2QsQ0FBQyxDQUFDOzs7OztBQ0pILElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3JDLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNwQyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzs7QUFFdkMsUUFBUSxDQUFDLEtBQUssRUFBRSxZQUFXOztBQUV6QixJQUFFLENBQUMsOEJBQThCLEVBQUUsWUFBVztBQUM1QyxRQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsa0JBQWtCLENBQUMsb0JBQUMsR0FBRyxPQUFFLENBQUMsQ0FBQztBQUMvQyxVQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUNqRCxDQUFDLENBQUM7Q0FFSixDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBTdG9yZSA9IHJlcXVpcmUoJy4vU3RvcmUuanMnKTtcbnZhciBhY3Rpb25zID0gcmVxdWlyZSgnLi9hY3Rpb25zLmpzJyk7XG5cbnZhciBDb21ib2JveCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yMTogJ3JlZCcsXG4gICAgICBjb2xvcjI6ICdncmVlbicsXG4gICAgICBjb2xvcjM6ICdibHVlJyxcbiAgICAgIGNvbG9yNDogJ3llbGxvdydcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBTdG9yZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLmNoYW5nZVN0YXRlKTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBTdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLmNoYW5nZVN0YXRlKTtcbiAgfSxcbiAgY2hhbmdlU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbG9yczogU3RvcmUuZ2V0Q29sb3JzKClcbiAgICB9KTtcbiAgfSxcblx0cmVuZGVyOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cbiAgICAgICAgPHNlbGVjdD5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt0aGlzLnN0YXRlLmNvbG9yMX0+e3RoaXMuc3RhdGUuY29sb3IxfTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3RoaXMuc3RhdGUuY29sb3IyfT57dGhpcy5zdGF0ZS5jb2xvcjJ9PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8c2VsZWN0PlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3RoaXMuc3RhdGUuY29sb3IzfT57dGhpcy5zdGF0ZS5jb2xvcjN9PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dGhpcy5zdGF0ZS5jb2xvcjR9Pnt0aGlzLnN0YXRlLmNvbG9yNH08L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cblx0XHQpO1xuXHR9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbWJvYm94O1xuIiwidmFyIGZsdXggPSByZXF1aXJlKCdmbHV4LXJlYWN0Jyk7XG52YXIgYWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZsdXguY3JlYXRlU3RvcmUoe1xuICBjb2xvcnM6IFtdLFxuICBhY3Rpb25zOiBbXG4gICAgYWN0aW9ucy5jaGFuZ2VDb2xvclxuICBdLFxuICBjaGFuZ2VDb2xvcjogZnVuY3Rpb24oY29sb3IpIHtcbiAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKylcbiAgICAge1xuICAgICAgICAgaWYoY29sb3JzW2ldID09PSBjb2xvcilcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbG9yc1tpXSA9IGNvbG9yO1xuICAgICAgICAgfVxuICAgICB9XG4gIH0sXG4gIHN0b3JlQ29sb3I6IGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHRoaXMuY29sb3JzLnB1c2goY29sb3IpO1xuICAgIHRoaXMuZW1pdENoYW5nZSgpO1xuICB9LFxuICBleHBvcnRzOiB7XG4gICAgZ2V0Q29sb3JzOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb2xvcnM7XG4gICAgfVxuICB9XG59KTtcbiIsInZhciBmbHV4ID0gcmVxdWlyZSgnZmx1eC1yZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZsdXguY3JlYXRlQWN0aW9ucyhbXG4gICdjaGFuZ2VDb2xvcidcbl0pO1xuIiwidmFyIEFwcCA9IHJlcXVpcmUoJy4vLi4vYXBwL0FwcC5qcycpO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0L2FkZG9uc1wiKTtcbnZhciBUZXN0VXRpbHMgPSBSZWFjdC5hZGRvbnMuVGVzdFV0aWxzO1xuXG5kZXNjcmliZShcIkFwcFwiLCBmdW5jdGlvbigpIHtcblxuICBpdChcInNob3VsZCBiZSB3cmFwcGVkIHdpdGggYSBkaXZcIiwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFwcCA9IFRlc3RVdGlscy5yZW5kZXJJbnRvRG9jdW1lbnQoPEFwcC8+KTtcbiAgICBleHBlY3QoYXBwLmdldERPTU5vZGUoKS50YWdOYW1lKS50b0VxdWFsKCdESVYnKTtcbiAgfSk7XG5cbn0pO1xuIl19
