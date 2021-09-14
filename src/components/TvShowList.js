import React from "react";
import "./TvShowList.css";

function TvShowList({image, title, rating}) {
  const imageUrl = "https://image.tmdb.org/t/p/w500/" + image;

  return (
    <div className="tvShowList">
      <div className="tvShowList_details">
        <img src={imageUrl} alt="" />
        <h4>{title}</h4>
        <p> Rating : {rating} </p>
      </div>
    </div>
  );
}

export default TvShowList;
