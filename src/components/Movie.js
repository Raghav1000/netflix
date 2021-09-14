import React, {useEffect, useState} from "react";
import "./Movie.css";
import axios from "axios";
import {apiKey, baseUrl} from "./apiFetch";
import MovieList from "./MovieList";

function Movie() {
  const movies_url =
    baseUrl + "/discover/movie?sort_by=popularity.desc&" + apiKey;

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios.get(movies_url).then((response) => {
      setMovieData(response.data.results);
    });
  }, [movies_url]);

  return (
    <div className="movie">
      <h1> Movies </h1>
      <div className="MovieList">
        {movieData.map(
          ({
            id,
            title,
            popularity,
            poster_path: image,
            vote_average: rating,
          }) => (
            <MovieList
              id={id}
              key={id}
              title={title}
              popularity={popularity}
              image={image}
              rating={rating}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Movie;
