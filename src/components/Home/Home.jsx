import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
        document.getElementById("error").style.display = "block";

    });
  }, [props, navigate]);

  const joinRoom = () => {
    if (username !== "" && roomName !== "") {
      let user = {
        username: username,
        room: roomName.toLowerCase(),
      };
      props.socket.emit("join", user);
      props.setVars(username, roomName);
    } else {
      document.getElementById("error").innerHTML =
        "You must fill in both fields.";
        document.getElementById("error").style.display = "block";

    }
  };

  useEffect(() => {
    window.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        if (document.getElementById("join-button")) {
          document.getElementById("join-button").click();
        }
      }
    });
  }, []);

  return (
    <div className="page-container">
      <div className="centered-box-container">
        <div className="centered-box">
          <h1 className="page-headers">Spardle!</h1>
          <input
            autoFocus
            placeholder="Username..."
            className="page-inputs"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
          <input
            placeholder="Room Name..."
            className="page-inputs"
            onChange={(e) => {
              setRoomName(e.target.value.toLowerCase());
            }}
          ></input>
          <p style={{display: "none"}} id="error"></p>
          <button className="page-buttons" id="join-button" onClick={joinRoom}>
            Join Room
          </button>
          
        </div>
      </div>
      <div className="bottom-right">
        <p>A game by Kyle Macasilli-Tan <Link to="/about">About</Link> <Link to="Rules">Rules</Link></p>
      </div>
    </div>
  );
}

export default Home;
