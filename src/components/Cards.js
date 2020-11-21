import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Give Us a Chance</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="images/img-9.jpg" text="Explore the code with us and learn new technologies" label="Coding Bootcamp" 
                        path="/services" />
                        <CardItem src="images/img-2.jpg" text="Explore the code with us and learn new technologies" label="Coding Bootcamp" 
                        path="/services" />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="images/img-9.jpg" text="Explore the code with us and learn new technologies" label="Coding Bootcamp" 
                        path="/services" />
                        <CardItem src="images/img-2.jpg" text="Explore the code with us and learn new technologies" label="Coding Bootcamp" 
                        path="/services" />
                        <CardItem src="images/img-4.jpg" text="Explore the code with us and learn new technologies" label="Coding Bootcamp" 
                        path="/services" />
                    </ul> 
                </div>
            </div>
        </div>
    )
}

export default Cards
