import React from 'react';
import image1 from "./images/LOTR1.jpg";
import image2 from "./images/LOTR2.jpg";
import image3 from "./images/LOTR3.jpg";
import Movie from './Movie';

// An array of movie data objects, each representing a movie with its properties.
const moviesData = [
  {
    id: 1,
    image: image1,
    title: 'The Fellowship of the Ring',
    synopsis: 'Frodo Baggins embarks on a perilous quest with the Fellowship of the Ring to destroy the One Ring while facing various adversaries, including the dark forces of Sauron.',
    rating: 4,
    reviews: [],
  },
  {
    id: 2,
    image: image2,
    title: 'The Two Towers',
    synopsis: 'As Frodo and Sam continue their journey to Mount Doom, the rest of the Fellowship fights to defend Middle-earth against Sauron\'s advancing armies.',
    rating: 5,
    reviews: [],
  },
  {
    id: 3,
    image: image3,
    title: 'The Return of the King',
    synopsis: 'The final battle for Middle-earth unfolds as Frodo and Sam approach Mount Doom, while Aragorn leads the last stand against Sauron\'s forces to determine the fate of the realm.',
    rating: 4,
    reviews: [],
  },
];

// Defining the functional component 'MovieList'.
const MovieList = () => {
  // The component returns JSX (JavaScript XML) which represents the UI.
  // It uses the 'map' function to iterate over the 'moviesData' array and renders a 'Movie' component for each movie.
  return (
    <div>
      {moviesData.map((movie) => (
        // Passing each 'movie' object as a prop to the 'Movie' component and using 'movie.id' as the 'key'.
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};


export default MovieList;
