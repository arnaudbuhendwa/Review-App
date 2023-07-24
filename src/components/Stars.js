import React, { useState } from 'react';

const Stars = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value === rating ? 0 : value);
  };

  return (
    <div>
      <p>Rate this movie:</p>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((value) => (
          <label key={value}>
            <input
              type="radio"
              name="rating"
              value={value}
              checked={value === rating}
              onChange={() => handleRatingChange(value)}
            />
            <span className="star-icon">{value <= rating ? '★' : '☆'}</span>
          </label>
        ))}
      </div>
      {rating > 0 && <p>You've rated this movie: {rating} star{rating > 1 ? 's' : ''}</p>}
    </div>
  );
};

export default Stars;
