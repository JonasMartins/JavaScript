import React from 'react';
import ReactDOM from 'react-dom';
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';



import {
  Meteor
} from 'meteor/meteor';

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> RUN: METEOR RUN >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

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


  /* track automaticamente renderiza sempre que o banco mude */

  Tracker.autorun(function(){
    let players = Players.find().fetch();
    let title = 'Score Keep';
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

  Players.insert({
    name: 'Jen',
    score: 1
  });

});
