import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
// StarRating component
function StarRating({ rating }) {
  const renderStars = (numStars) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      const isFilled = i < numStars;
      stars.push(
        <span
          key={i}
          className={`fa fa-star ${isFilled ? 'checked' : ''}`}
        ></span>
      );
    }
    return stars;
  };

  return <div>{renderStars(rating)}</div>;
}

export default StarRating;
