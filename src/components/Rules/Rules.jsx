import React from "react";
import "./Rules.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo512 from "../../components/logo512.png";

function Rules() {
  const navigate = useNavigate();

  function returnHome() {
    navigate("/");
  }

  return (
    <div className="page-container">
      <h2>
        <img className="big-s" src={logo512} />
        <span className="raise-to-meet-logo">pardle! Gameplay</span>
      </h2>
      <div className="rule-container">
        <p className="rule-line">
          Enter a "username" and create a "room name" and click{" "}
          <button className="page-buttons-example">Join Room</button>.
        </p>
        <p className="rule-line">
          Invite your friends to join the same room as you.
        </p>
        <p className="rule-line">
          Once you have two or more players, anyone can start the game by
          clicking <button className="page-buttons-example">Spardle!</button>.
        </p>
        <p className="rule-line">
          <b className="underline">SPARDLE! GAME RULES:</b>
        </p>
        <p className="rule-line">You have six tries to guess the word.</p>
        <p className="rule-line">
          Each guess must be a valid 5-letter word. Hit enter or click{" "}
          <button className="page-buttons-example">Submit</button> to confirm
          your guess.
        </p>
        <p className="rule-line">
          After each guess, the color of the tiles will change to show how close
          your guess was to the word.
        </p>
        <div className="entryRow">
          <div className="entry" style={{backgroundColor: "green"}}>L</div>
          <div className="entry">A</div>
          <div className="entry">S</div>
          <div className="entry">E</div>
          <div className="entry">R</div>
        </div>
        <p className="rule-line">
          If the letter is green, it is in the word and in the correct spot.
        </p>
        <div className="entryRow">
          <div className="entry">J</div>
          <div className="entry" style={{backgroundColor: "yellow"}}>O</div>
          <div className="entry">I</div>
          <div className="entry">N</div>
          <div className="entry">T</div>
        </div>
        <p className="rule-line">
          If the letter is yellow, it is in the word but in the wrong spot.
        </p>
        <div className="entryRow">
          <div className="entry">S</div>
          <div className="entry">H</div>
          <div className="entry" style={{backgroundColor: "gray"}}>A</div>
          <div className="entry">R</div>
          <div className="entry">D</div>
        </div>
        <p className="rule-line">
          If the letter is gray, it is not in the word.
        </p>
        <p className="rule-line">
          Upon guessing the word in six tries or less, you will receive a point.
        </p>
        <p className="rule-line">
          If you cannot guess the word in 6 tries, you will lose a point. You
          cannot have a negative number of points.
        </p>
        <p className="rule-line">
          First person to 5 points wins! The game will also end after 7 minutes.
        </p>
      </div>
      <button className="page-buttons" onClick={returnHome}>
        Return to Home
      </button>
    </div>
  );
}

export default Rules;
