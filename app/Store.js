var flux = require('flux-react');
var actions = require('./actions.js');
var Dispatcher = require('./ColorDispatcher.js')
var _color

Dispatcher.register( function( payload ) {

    switch( payload.actionName ) {
        // Do we know how to handle this action?
        case 'changeColor':
            console.log("HOLY SHIT SOMETHING WORKED!")
            break;
    }
});
module.exports = flux.createStore({

  color : "white",

  changeColor: function(color) {
     for(var i = 0; i < colors.length; i++)
     {
         if(colors[i] === color)
         {
            colors[i] = color;
         }
     }
  },
  storeColor: function (color) {
    this.colors.push(color);
    this.emitChange();
  },
  exports: {
    getColor: function () {
      return this.color;
    }
  },

  });
