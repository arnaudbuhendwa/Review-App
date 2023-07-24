import React from 'react';

// Defining the functional component 'Review', which takes a prop 'reviews'.
const Review = ({ reviews }) => {
  // The component returns JSX (JavaScript XML) which represents the UI.
  return (
    <div>
      {/* Rendering a heading for the reviews section. */}
      <h3>Reviews:</h3>

      {/* Using the 'map' function to iterate over the 'reviews' array and render each review as a paragraph element. */}
      {reviews.map((review, index) => (
        // Using the 'index' as the 'key' for each review element to help React efficiently update the list.
        <p key={index}>{review}</p>
      ))}
    </div>
  );
};


export default Review;
