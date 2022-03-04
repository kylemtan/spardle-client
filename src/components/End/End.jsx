import React from "react";
import "./End.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function End(props) {
  const navigate = useNavigate();
  const [endUsers, setEndUsers] = useState([]);

  useEffect(() => {
    if (props.room === "") {
      navigate("/");
    }
    if(props.users){
      let userArray = [];
      userArray = props.users;
      userArray.sort((a, b) => (a.score > b.score) ? -1 : 1)
      setEndUsers([...userArray]);
    }

  }, [props.users]);

  function returnMenu() {
    window.location.reload();
  }

  function rejoinRoom() {
    if (props.username !== "" && props.room !== "") {
      let user = {
        username: props.username,
        room: props.room,
      };
      props.socket.emit("join", user);
    } else {
      document.getElementById("error").innerHTML =
        "You must fill in both fields.";
    }
  }

  return (
    <div className="page-container">
      <h1 className="page-headers">Game Over!</h1>
      <h2>Rankings:</h2>
      { endUsers ? <ul className="end-leaderboard">
        {endUsers.map((user, index) => (
          <li className="end-leaderboard-item" key={index}>
            <p>#{index + 1}: {user.username}</p>
            <p>{user.score}</p>
          </li>
        ))}
      </ul> : <h1>Loading...</h1>}
      <button className="page-buttons" onClick={returnMenu}>
        Exit to Main Menu
      </button>
      {/* <button className="page-buttons" onClick={rejoinRoom}>
        Rejoin Room
      </button> */}
    </div>
  );
}

export default End;
