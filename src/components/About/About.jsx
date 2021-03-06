import React from "react";
import "./About.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo512 from "../../components/logo512.png";


function About() {
  const navigate = useNavigate();

  function returnHome() {
    navigate("/");
  }

  return (
    <div className="page-container">
           <div className="rule-container">
      <h1><span className="raise-to-meet-logo">About</span><img className="big-s" src={logo512}/><span className="raise-to-meet-logo">pardle!</span></h1>
      <p className="rule-line">
        Thanks to John Wardle and his creation of Wordle, my high school friends and I found something new and wholesome to enjoy. 
        I love playing with my friends, and our competitive spirit made us want to find
        the true Wordle champion. Other forks of Wordle didn't allow for the type of gameplay that made
        competing easy and automatic. I decided to develop an app to get everyone on a virtual room with a
        timer, a scoreboard and other game basics to even the playing field. I also wanted the ability to have unlimited rounds of
        competition. <b>Spardle!</b> was born. This is a beta version of the game, and I plan to make many improvements
        and other features over time.{" "}
        {/* I welcome any suggestions from players, and will try to accommodate them
        where practical and useful. 
        You can send ideas and requests to{" "}
        <a href="mailto:kylemacasillitan@gmail.com">
          kylemacasillitan@gmail.com
        </a>. I will try to respond in a timely manner (after I
        finish my homework, lol).  */}
        I hope you and your friends enjoy <b>Spardle!</b> and may the best Spardler win!
      </p>
      </div>
      <button className="page-buttons" onClick={returnHome}>Return to Home</button>
    </div>
  );
}

export default About;
