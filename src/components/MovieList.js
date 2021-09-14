import React from "react";
import "./MovieList.css";

function MovieList({title, id, image, rating, popularity}) {
  const imageUrl = "https://image.tmdb.org/t/p/w500/" + image;

  console.log(id);
  return (
    <div>
      <div className="movieList">
        <div className="movieList_details">
          <img src={imageUrl} alt="" />

          <h4>{title}</h4>
          <p> Rating : {rating} </p>
        </div>
      </div>
    </div>
  );
}

export default MovieList;
