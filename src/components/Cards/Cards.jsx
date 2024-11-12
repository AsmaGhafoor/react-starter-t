// src/components/Cards/Cards.jsx

import React from "react";
import "../../styles/Cards.css"; // Optional for any custom styles

// Sample data for cards
const cardData = [
    {
        id: 1,
        image: "https://via.placeholder.com/150",
        title: "Card 1",
        description: "This is a description for Card 1.",
    },
    {
        id: 2,
        image: "https://via.placeholder.com/150",
        title: "Card 2",
        description: "This is a description for Card 2.",
    },
    {
        id: 3,
        image: "https://via.placeholder.com/150",
        title: "Card 3",
        description: "This is a description for Card 3.",
    },
    {
        id: 4,
        image: "https://via.placeholder.com/150",
        title: "Card 4",
        description: "This is a description for Card 4.",
    },
];

const Cards = () => {
    return (
        <div className="container my-4">
            <div className="row">
                {cardData.map((card) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={card.id}>
                        <div className="card h-100">
                            <img src={card.image} className="card-img-top" alt={card.title} />
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.description}</p>
                                <a href="#" className="btn btn-primary">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
