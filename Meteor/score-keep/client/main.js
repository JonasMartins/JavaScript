import React from 'react';
import ReactDOM from 'react-dom';
import {
  Meteor
} from 'meteor/meteor';
/**
 * [startup description]
 * @param  {[type]} funcrion( [description]
 * @return {[type]}           [description]
 *
 * app vem do id do arquivo main.html
 * 
 */
Meteor.startup(function() {

  let name = 'Andrew';
  let jsx = <p>Hello {name}!</p>;

  ReactDOM.render(jsx, document.getElementById('app'));
});
