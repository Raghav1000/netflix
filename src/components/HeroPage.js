import React, {useEffect, useState} from "react";
import "./HeroPage.css";

function HeroPage() {
  const heroPageData = [
    {
      image: "./images/boss-baby.jpg",
      title: "The Boss Baby(2020)",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, accusantium!",
    },
    {
      image: "./images/fatherhood.jpg",
      title: "Fatherhood(2021)",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit, accusantium!",
    },
    {
      image: "./images/luca.png",
      title: "Luca(2021) ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, accusantium!",
    },
  ];

  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (currentImg < 2) {
        setCurrentImg(currentImg + 1);
      }
      if (currentImg === 2) {
        setCurrentImg(0);
      }
    }, 5000);
  }, [currentImg]);

  return (
    <div className="heroPage">
      <div className="heroPage_img">
        <img src={heroPageData[currentImg].image} alt="" />
      </div>
      <div className="heroPage_imgGradient"></div>
      <div className="heroPage_imgDescription">
        <h1>{heroPageData[currentImg].title}</h1>
        <h5>{heroPageData[currentImg].description}</h5>
        <button>Play now</button>
      </div>
    </div>
  );
}

export default HeroPage;
