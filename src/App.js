import React from 'react';
import './App.css';
import MovieList from './components/MovieList';

// Defining the main functional component named 'App'.
function App() {
  // It returns a div containing an h1 element and the 'MovieList' component.
  return (
    <div>
      <h1>The Lord Of The Rings Movie Review</h1>
      <MovieList />
    </div>
  );
}


export default App;
