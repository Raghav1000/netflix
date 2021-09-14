/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt=""
        />
      </div>
      <div className="header-right">
        <ul>
          <li>
            <a
              onClick={() => {
                const destination = document.querySelector("#movie");
                destination.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              Movies
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                const tvshow = document.querySelector("#tvshow");
                tvshow.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              Series
            </a>
          </li>
          <li>
            <a href="/">Genre</a>
          </li>
        </ul>

        <button>Login</button>
      </div>
    </div>
  );
}

export default Header;
