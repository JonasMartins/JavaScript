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

const handleSubmit = function(e) {
  let playerName = e.target.playerName.value;
  e.preventDefault();
  // se a entrada não estiver vazia, ou seja, o nome do player for diferente de ''
  if (playerName) {
    e.target.playerName.value = '';
    // players insert 
    Players.insert({
      name: playerName,
      score: 0
    });
  }
};

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
        
        <fomr onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player Name"/>
          <button>Add Player</button>
        </form>

      </div>     
      
      );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
