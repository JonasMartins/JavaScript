import React from 'react';
import ReactDOM from 'react-dom';
import {
  Meteor
} from 'meteor/meteor';

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> RUN: METEOR RUN >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
const players = [
  {
    _id: '1',
    name: 'Lauren',
    score: '99',
  },
  
  {
    _id: '2',
    name: 'Cory',
    score: '-1',
  },

  {
    _id: '3',
    name: 'Andrew',
    score: '-12',
  }
  
  ];

const renderPlayers = function(playersList){

  return playersList.map(function(player){
  
    return <p key={player._id}>{ player.name } has {player.score} !</p>
  
  }); 

};

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
    
    <div>
      <h1>{title}</h1>
      <p>Hello {name}!</p>
    
      {renderPlayers(players)}
      
    </div>     
    
    );

  ReactDOM.render(jsx, document.getElementById('app'));
});
