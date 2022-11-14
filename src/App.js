import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';

const cardImages = [
  {"src": "/img/computer.jpeg" }, 
  {"src": "/img/headphones.jpeg"}, 
  {"src": "/img/phone.jpeg"},
  {"src": "/img/ipad.jpeg"}
  ]

function App() {

const [cards, setCards]= useState([])
const [turns, setTurns]=useState(0)
const [cardOne, setCardOne] =useState(null)
const [cardTwo, setCardTwo]=useState(null)

  //shuffle cards 
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
     .sort(()  => Math.random() - 0.5)
     .map((card) => ({ ...card, id: Math.random()}))

     setCards(shuffleCards)
     setTurns(0)
  }

  //CHOICE

  const backClick = () => (card) => {
    cardOne ? setCardTwo(card): setCardOne(card)
  }

  //compare 2 cards
  useEffect(() => {
    if(cardOne && cardTwo) 

    if(cardOne.src === cardTwo.src) {
      console.log("You found a match")
      resetTurn()
    } else{
      console.log ("Cards do not match")
      resetTurn()
    }
  }, [cardOne, cardTwo])

    //reset
     const resetTurn = () => {
     setCardOne(null)
     setCardTwo(null)
     setTurns(prevTurns => prevTurns +1 )
}

  return (
    <div className='App'> 
    <h1> Kristina's Card Game </h1>
    <button onClick={shuffleCards}> New Game </button>

    <div className='grid'>
      {cards.map(card => (
        <Card key={card.id} card={card}
        backClick={backClick}/> 
      ))}
    </div>
    </div>
  );
}

export default App;
