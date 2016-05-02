var flux = require('flux-react');
var actions = require('./actions.js');
var Dispatcher = require('./ColorDispatcher.js');
var EventEmitter = require('events').EventEmitter;

Dispatcher.register( function( payload ) {

    switch( payload.actionName ) {
        // Do we know how to handle this action?
        case 'changeColor':
            ColorModel.setColor(payload.newItem.color);
            break;
        default:
            break;
    }
});
var ColorModel = flux.createStore({

  color : "red",

  changeColor: function(color) {
     for(var i = 0; i < colors.length; i++)
     {
         if(colors[i] === color)
         {
            colors[i] = color;
         }
     }
  },
  exports: {
    getColor: function () {
      return this.color;
    },

    setColor: function(c) {
      this.color = c;
      this.emit('changeColor');
    }

  },

  });

  module.exports = ColorModel;
