import './Card.css'

export default function Card({card, handleChoice, flipped}) {

    const backClick = () => {
        handleChoice(card)

    }
    return(
      <div className ="card" > 
        <div className={flipped ? "flipped" : ""}> 
          <img className="front" src= {card.src} alt = "front of the card" />
          <img className ="back" 
          src = "/img/redcover.jpeg"
          on Click ={backClick} 
          alt="back of the card" />
        </div>
        </div>
    )
}
