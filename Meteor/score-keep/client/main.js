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
 * Só pode haver um root element, ou seja apenas um div, 
 * podem haver vários outros elemetnos desse div root
 */
Meteor.startup(function() {
  let title = 'Account Seetings';
  let name = 'Andrew';
  let jsx = (

    {/* comments */}
    <h1>{title}</h1>
    <div>
      <p>Hello {name}!</p>
    </div> 

    );

  ReactDOM.render(jsx, document.getElementById('app'));
});
