import React, { useState } from 'react';
import Stars from './Stars';
import Review from './Review';
import ReviewForm from './ReviewForm';

// Defining the functional component 'Movie', which takes a prop 'movie'.
const Movie = ({ movie }) => {
  // Using the 'useState' hook to create a state variable 'reviews' and its setter 'setReviews'.
  // The initial value of 'reviews' is set to the 'reviews' prop passed to the component.
  const [reviews, setReviews] = useState(movie.reviews);

  // Defining a function 'addReview' that takes a new review as an argument and updates the 'reviews' state.
  // It creates a new array with the existing reviews and the new review, then sets it using 'setReviews'.
  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="movie-container">
      {/* Rendering the movie image with the URL provided in the 'movie.image' prop. */}
      <img src={movie.image} alt={movie.title} className="movie-image" />
      <div>
        {/* Rendering the movie title, synopsis, and rating from the 'movie' prop. */}
        <h2>{movie.title}</h2>
        <p>{movie.synopsis}</p>
        <p>Rating: {movie.rating}</p>

        {/* Rendering the 'Stars' component to show the movie's rating visually. */}
        <Stars />

        {/* Rendering the 'Review' component and passing the 'reviews' state as a prop. */}
        <Review reviews={reviews} />

        {/* Rendering the 'ReviewForm' component and passing the 'addReview' function as a prop. */}
        <ReviewForm addReview={addReview} />
      </div>
    </div>
  );
};

// Exporting the 'Movie' component to be used elsewhere in the application.
export default Movie;