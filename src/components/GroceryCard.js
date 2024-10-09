import React from 'react';
import '../../GroceryCard.css';

const GroceryCard = ({ image, name, description, price, discount }) => {
  return (
    <div className="grocery-card">
      <img src={image} alt={name} className="grocery-image" />
      <div className="grocery-info">
        <h3 className="grocery-name">{name}</h3>
        <p className="grocery-description">{description}</p>
        <p className="grocery-price">
          ₹{price} <span className="grocery-discount">₹{discount}</span>
        </p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default GroceryCard;
