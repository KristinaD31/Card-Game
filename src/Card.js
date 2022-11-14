import './Card.css'



export default function Card({card}) {

    const backClick = () => {
        backClick(card)

    }
    return(
      <div className ="cards" > 
        <div> 
          <img className="front" src= {card.src} alt = "front of the card" />
          <text className ="back" on Click ={backClick} alt="back of the card" />
        </div>
        </div>
    )
}
