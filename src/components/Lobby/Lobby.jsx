import React from "react";
import "./Lobby.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Lobby(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.room === "") {
      navigate("/");
    }
    props.socket.on("update users", (data) => {
      props.setUsers(data);
    });
    props.socket.on("not enough players", (data) => {
      document.getElementById("error").innerHTML =
        "Not enough players in the lobby.";
    });
    props.socket.on("send words", (data) => {
      props.setWords(data);
      navigate("/game");
    });
  }, [props, navigate]);

  const startGame = () => {
    if (props.users.length >= 2) {
      props.socket.emit("start game", props.room);
    } else {
      document.getElementById("error").innerHTML =
        "You must have two players in the lobby.";
    }
  };

  return (
    <div className="lobby-wrapper">
      <div className="top-container">
        <div className="top-inner-container">
          <p style={{marginRight: "10px"}}>Have your friends join at <b>https://spardle.com!</b></p>
          <div style={{paddingLeft: "10px", borderLeft: "solid"}}>
          <p>Room name:</p>
          <h1>{props.room}</h1>
          </div>
        </div>
      </div>

      <div className="bottom-container">
        <p style={{marginTop: "0", paddingTop: "15px"}}>Players in room:</p>
        <div className="lobby-list">
          {props.users.map((user, index) => (
            <p className="lobby-list-item" key={index}>
              {user.username}
            </p>
          ))}
        </div>
        <p id="error"></p>
        <button className="page-buttons" onClick={startGame}>
          Spardle!
        </button>
      </div>
    </div>
  );
}

export default Lobby;
