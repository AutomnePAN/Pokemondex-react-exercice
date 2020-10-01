import React from 'react';
import Pokecard from './Pokecard';
import "./Pokedex.css";

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

class Pokedex extends React.Component{


    render() {
        var default_pokedex = this.props.pokedex;
        shuffle(default_pokedex);
        return (
        <div className="Pokedex">
            <p className={`Pokedex-header Pokedex-header--${this.props.isWinner ? "winner":"loser"}`}>
                Total Exp: {this.props.exp}   {this.props.isWinner ? "Winner" : "Loser"}</p>
            { default_pokedex.map(card => <Pokecard id={`${card.id}`} 
                                                    name={`${card.name}`} 
                                                    type={`${card.type}`} 
                                                    base_experience={`${card.base_experience}`}/>)}
        </div>
        );
    }
}

export default Pokedex;