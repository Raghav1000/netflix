import React from "react";
import "./TvShow.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {apiKey, baseUrl} from "./apiFetch";
import TvShowList from "./TvShowList";

function TvShow() {
  const [tvShowData, setTvShowData] = useState([]);

  const tvShowUrl = baseUrl + "/tv/popular?" + apiKey;

  useEffect(() => {
    axios.get(tvShowUrl).then((response) => {
      console.log(response.data.results);
      setTvShowData(response.data.results);
    });
  }, [tvShowUrl]);

  return (
    <div className="tvShow">
      <h1>Tv Shows</h1>
      <div className="MovieList">
        {tvShowData.map(
          ({
            id,
            original_name: title,
            popularity,
            poster_path: image,
            vote_average: rating,
          }) => (
            <TvShowList
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

export default TvShow;
