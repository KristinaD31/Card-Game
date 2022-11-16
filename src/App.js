import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';

const cardImages = [
  {"src": "/img/computer.jpeg", match: false}, 
  {"src": "/img/headphones.jpeg", match: false}, 
  {"src": "/img/phone.jpeg", match: false},
  {"src": "/img/ipad.jpeg", match: false}
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

  const handleChoice = (card) => {
    cardOne ? setCardTwo(card): setCardOne(card)
  }

  //compare 2 cards
  useEffect(() => {
    if(cardOne && cardTwo) { 

    if(cardOne.src === cardTwo.src) {
      setCards(prevCards => { 
        return prevCards.map(card => {
          if(card.src === cardOne.src){
            return {...card, match: true}
          } else{
            return card
          }
        })
      })
      resetTurn()
    } else{
      
      resetTurn()
    } 
  } 
  }, [cardOne, cardTwo])
    
    console.log(cards)

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
        <Card key={card.id} 
        card={card}
        handleChoice={handleChoice}
        flipped={card === cardOne || card === cardTwo || card.match}/> 
      ))}
    </div>
    </div>
  );
}

export default App;
