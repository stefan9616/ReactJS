import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/movies.json`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.movies)
      });
  }, [])

  const onMovieDelete = (id) => {
    setMovies(state => state.filter(x => x.id !== id));
  }

  const onMovieSelect = (id) => {
    setMovies(state => state.filter(x => x.id === id))
  }

  return (
    <MovieList movies={movies} onMovieDelete={onMovieDelete} onMovieSelect={onMovieSelect} />
  );
}

export default App;
