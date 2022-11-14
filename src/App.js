
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import { useState } from 'react';
import './App.css';

const cardImages = [
  {"src": "/img/computer.jpeg" }, 
  {"src": "/img/headphones.jpeg"}, 
  {"src": "/img/phone.jpeg"},
  {"src": "/img/ipad.jpeg"}
  ]

function App() {

const [cards, setCards]= useState([])
const [turns, setTurns]=useState(0)


  //shuffle cards 
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
     .sort(()  => Math.random() - 0.5)
     .map((card) => ({ ...card, id: Math.random()}))

     setCards(shuffleCards)
     setTurns(0)
  }
  console.log(cards, turns)

  return (
    <div className='App'> 
    <h1> Kristina's Card Game </h1>
    <button onClick={shuffleCards}> New Game </button>

    <div className='grid'>
      {cards.map(card => (
        <div className ="cards" key ={card.id}> 
        <div> 
          <img className="front" src= {card.src} alt = "front of the card" />
        </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;
