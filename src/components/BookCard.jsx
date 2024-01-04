import React from 'react';
import '../Assets/Css/bookcard.css';

const BookCard = ({ title, author, price, image }) => (
  <div className="book-card">
    <img src={image} alt={title} />
    <div className="book-info">
      <h3>{title}</h3>
      <p>{author}</p>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  </div>
);

export default BookCard;
