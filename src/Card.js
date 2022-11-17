import './Card.css'

export default function Card({card, handleChoice, flipped, disabled}) {

    const backClick = () => {
        if (!disabled) {
          handleChoice(card)
        }
    }
    return(
      <div className ="card" > 
        <div className={flipped ? "flipped" : ""}> 
          <img className="front" src= {card.src} alt = "front of the card" />
          <img className ="back" 
          src = "/img/redcover.jpeg"
          onClick ={backClick} 
          alt="back of the card" />
        </div>
        </div>
    )
}

