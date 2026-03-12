import React, { useEffect, useRef } from 'react'
import "./TitleCards.css"
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({title, category}) => {

    // Creates a horizontal  scrolling function when user scrolls their mouse wheel on top of the card list
    const cardsRef = useRef();

    const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }
    
    useEffect(()=>{
        cardsRef.current.addEventListener('wheel', handleWheel)
    }, [])
    

  return (
    <div className="titlecards">
        <h2>{title?title:"Popular on Netflix"}</h2>
        <div className="card__list" ref={cardsRef}>
            {cards_data.map((card, index) => {
                return <div className="card" key={index}>
                    <img src={card.image} alt="" />
                    <p>
                        {card.name}
                    </p>
                </div>
            })}
        </div>
    </div>
  )
}

export default TitleCards