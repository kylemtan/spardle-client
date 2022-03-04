import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    props.socket.on("update users", (data) => {
      props.setUsers(data);
      navigate("/lobby");
    });
    props.socket.on("already started", (data) => {
      document.getElementById("error").innerHTML =
        "This room already has a game in progress.";
    });
  }, [props, navigate]);

  const joinRoom = () => {
    if (username !== "" && roomName !== "") {
      let user = {
        username: username,
        room: roomName,
      };
      props.socket.emit("join", user);
      props.setVars(username, roomName);
    } else {
      document.getElementById("error").innerHTML =
        "You must fill in both fields.";
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        if(document.getElementById("join-button")){
          document.getElementById("join-button").click();
        }      }
    });
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-headers">Spardle</h1>
      <h2>Username</h2>
      <input
        autoFocus
        className="page-inputs"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      ></input>
      <h2>Room Name</h2>
      <input
        className="page-inputs"
        onChange={(e) => {
          setRoomName(e.target.value.toLowerCase());
        }}
      ></input>
      <button className="page-buttons" id="join-button" onClick={joinRoom}>
        Join Room
      </button>
      <p id="error"></p>
      <h2>Rules</h2>
      <div className="rule-container">
        <p className="rule-line">
          Enter a username and room name and click join room.
        </p>
        <p className="rule-line">
          Invite your friends to join the same room as you.{" "}
        </p>
        <p className="rule-line">
          Once you have two or more players, anyone can start the game.
        </p>
        <p className="rule-line">Game rules:</p>
        <p className="rule-line">You have six tries to guess the word.</p>
        <p className="rule-line">
          Each guess must be a valid 5-letter word. Hit enter or submit to
          submit.
        </p>
        <p className="rule-line">
          After each guess, the color of the tiles will change to show how close
          your guess was to the word.
        </p>
        <p className="rule-line">
          If the letter is green, it is in the word and in the correct spot.
        </p>
        <p className="rule-line">
          If the letter is yellow, it is in the word but in the wrong spot.
        </p>
        <p className="rule-line">
          If the letter is gray, it is not in the word.
        </p>
        <p className="rule-line">
          Upon guessing the word in six tries or less, you will receive a point.
        </p>
        <p className="rule-line">
          If you cannot guess the word in 6 tries, you will lose a point.
        </p>
        <p className="rule-line">First person to 6 points wins!</p>
      </div>
    </div>
  );
}

export default Home;
