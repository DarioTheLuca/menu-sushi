import Navbar from "./components/navbar"; //per usare il componente devo importarlo
import Card from "./components/card";
import React, { Component } from "react";
import california from "./images/images/california.png";
import dragon from "./images/images/dragon.png";
import dynamite from "./images/images/dynamite.png";
import logo from "./images/images/logo.png";
import philadelphia from "./images/images/philadelphia.png";
import rainbow from "./images/images/rainbow.png";
import shrimp from "./images/images/shrimp.png";

class App extends Component {
  state = {
    cards: [
      { id: 0, nome: "California", prezzo: 1.99, immagine: california ,quantità: 0},
      { id: 1, nome: "Dragon", prezzo: 3, immagine: dragon ,quantità: 0},
      { id: 2, nome: "Dynamite", prezzo: 2.99, immagine: dynamite,quantità: 0 },
      { id: 3, nome: "Philadelphia", prezzo: 4.99, immagine: philadelphia ,quantità: 0},
      { id: 4, nome: "Rainbow", prezzo: 5.99, immagine: rainbow,quantità: 0},
      { id: 5, nome: "Shrimp", prezzo: 1.99, immagine: shrimp,quantità: 0 }
    ]
  }

  handleDelete= cardID =>{
    const cards=this.state.cards.filter(card => card.id != cardID); //definisco la costante aggiornata
    this.setState({cards}); //la assegno allo stato
  }

  handleIncrement=card=>{
    const cards=[...this.state.cards];
    const index=cards.indexOf(card);
    //cards[index]={...card}; può essere omessa, non capisco perchè sta
    cards[index].quantità++;
    this.setState({cards});
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <h1>Cosa desideri ordinare?</h1>
          <hr />
          <div className="row">
            {/* la funzione map è di javascript e permette di ciclare un array di oggetti */}
            {this.state.cards.map(card => (
              <Card 
              key={card.id} 
              card={card} 
              onDelete={this.handleDelete} /* gli passo il metodo della classe padre attraverso le props*/ 
              onIncrement={this.handleIncrement}
              />
            ))}
          </div>

        </div>
      </>
    );
  }
}

export default App;
