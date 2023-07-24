import React, { useState } from 'react';

// Defining the functional component 'ReviewForm', which takes a prop 'addReview'.
const ReviewForm = ({ addReview }) => {
  // Using the 'useState' hook to create a state variable 'review' and its setter 'setReview'.
  // The initial value of 'review' is an empty string.
  const [review, setReview] = useState('');

  // Defining the 'handleSubmit' function, which is triggered when the form is submitted.
  // It prevents the default form submission behavior, calls the 'addReview' function with the current review text,
  // and then resets the 'review' state to an empty string.
  const handleSubmit = (event) => {
    event.preventDefault();
    addReview(review);
    setReview('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Leave A Review:
        <br></br>
        {/* Rendering an input element of type 'text' that allows users to type their review. */}
        {/* The value of the input is controlled by the 'review' state, and any changes update the state using 'setReview'. */}
        <input type="text" value={review} onChange={(e) => setReview(e.target.value)} />
      </label>
      {/* Rendering a submit button to submit the review form. */}
      <button type="submit">Submit</button>
    </form>
  );
};


export default ReviewForm;
