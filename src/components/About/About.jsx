import React from "react";
import "./About.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  function returnHome() {
    navigate("/");
  }

  return (
    <div className="page-container">
           <div className="rule-container">
      <h1>About</h1>
      <p className="rule-line">
        Thanks to John Wardle and his creation of Wordle, my high school friends and I found something new and wholesome to enjoy. 
        I love playing with my friends, and our competitive spirit made us want to find
        the true Wordle champion. Other forks of Wordle didn't allow for the type of gameplay that made
        competing easy and automatic. I decided to develop an app to get everyone on a virtual room with a
        timer, a scoreboard and other game basics to even the playing field. I also wanted the ability to be able to have unlimited rounds of
        competition. <b>Spardle!</b> was born. This is a beta version of the game, and I plan to make many improvements
        and other features over time. I welcome any suggestions from players, and will try to accommodate them
        where practical and useful. You can send ideas and requests to:
        <a href="mailto:kylemacasillitan@gmail.com">
          kylemacasillitan@gmail.com
        </a>. I will try to respond in a timely manner, but may not be able to as I
        have homework to do (lol). I hope you and your friends enjoy Spardle and may the best Spardler win!
      </p>
      </div>
      <button className="page-buttons" onClick={returnHome}>Return to Home</button>
    </div>
  );
}

export default About;
