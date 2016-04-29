var flux = require('flux-react');
var actions = require('./actions.js');

module.exports = flux.createStore({
  colors: [],
  actions: [
    actions.changeColor
  ],
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
    getColors: function () {
      return this.colors;
    }
  }
});
