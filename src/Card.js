import React from 'react';


function Card({ id, type, flipped, handleClick }) {
  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={() => handleClick(id)}>
      <div className="card-content">
        <div className="card-front">?</div>
        <div className="card-back">{type}</div>
      </div>
    </div>
  );
}

export default Card;