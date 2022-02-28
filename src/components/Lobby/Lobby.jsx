import React from 'react';
import './Lobby.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Lobby(props) {
  const navigate = useNavigate()

  useEffect(() => {
    if(props.room === ""){
      navigate("/")
    }
    props.socket.on("update users", (data) => {
      props.setUsers(data);
    });
    props.socket.on("not enough players", (data) => {
      document.getElementById("error").innerHTML = "Not enough players in the lobby."
    });
    props.socket.on("send words", (data) => {
      props.setWords(data);
      navigate("/game")
    })
  }, [props, navigate])

  const startGame = () => {
    if(props.users.length >= 2){
      props.socket.emit("start game", props.room);
    } else {
      document.getElementById("error").innerHTML = "You must have two players in the lobby."
    }
  }

  return (
      <div className="page-container">
        <h1 className="page-headers">{props.room}</h1>
        <h2>Players in lobby:</h2>
        <ul className="lobby-list">
          {props.users.map((user, index) => (
            <li className="lobby-list-item" key={index}>{user.username}</li>
          ))}
        </ul>
        <button className="page-buttons" onClick={startGame}>Start</button>
        <p id="error"></p>

      </div>
  );
}

export default Lobby;
