import React from 'react';
import "./Pokecard.css"

function digit3transform(num) {
    var res = `${num}`;
    console.log(res);
    console.log(res.length);
    if (res.length == 1){
        res = "00"+ res;
    }
    if (res.length == 2){
        res = "0" + res;
    }
     
    console.log(res);
    return res;
}

class Pokecard extends React.Component{

    

    render() {
        return (
        <div className="Pokecard">
            <div>{this.props.name}</div>
            <img className = "Pokecard-img" src = {`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${digit3transform(this.props.id)}.png`}/>
            <div>Type: {this.props.type}</div>
            <div className = { `Pokecard-experience, Pokecard-experience__${ this.props.base_experience > 75 ? "red":"blue"}` }>Exp: {this.props.base_experience}</div>
        </div>
        );
    }
}

export default Pokecard;