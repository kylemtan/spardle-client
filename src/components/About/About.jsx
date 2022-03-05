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
        Thanks to John Wardle and his creation of Wordle, my high school friends
        and I found something new and wholesome to enjoy.
      </p>
      <p className="rule-line">
        I love playing with my friends, and our competitive spirit made us want to find
        the true Wordle champion. 
      </p>
      <p className="rule-line">
      We would all start Wordle at 7:30 in the
        morning to see who could complete it the fastest.
      </p>
      <p className="rule-line">
        Other forks of Wordle didn't allow for the type of gameplay that made
        competing easy and automatic.
      </p>
      <p className="rule-line">
        I decided to develop an app to get everyone on a virtual room with a
        timer, a scoreboard and other game basics to even the playing field.
      </p>
      <p className="rule-line">
        I also wanted the ability to be able to have unlimited rounds of
        competition. Spardle was born.
      </p>
      <p className="rule-line">
        This is a beta version of the game, and I plan to make many improvements
        and other features over time.
      </p>
      <p className="rule-line">
        I welcome any suggestions from players, and will try to accommodate them
        where practical and useful. You can send ideas and requests to:
        <a href="mailto:kylemacasillitan@gmail.com">
          kylemacasillitan@gmail.com
        </a>
        .
      </p>
      <p className="rule-line">
        I will try to respond in a timely manner, but may not be able to as I do
        have homework to do also :-)
      </p>
      <p className="rule-line">
        I hope you and your friends enjoy Spardle and may the best Spardler win!
      </p>
      </div>
      <button className="page-buttons" onClick={returnHome}>Return to Home</button>

    </div>
  );
}

export default About;
