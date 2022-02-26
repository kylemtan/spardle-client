import React from "react";
import "./End.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

let userArray = [];

function End(props) {
    const navigate = useNavigate();
  useEffect(() => {
    if (props.room === "") {
        navigate("/");
      }
    userArray = props.users
  }, [props.users]);

  function returnMenu (){
    navigate("/");
  }

  function rejoinRoom (){
    if(props.username !== "" && props.room !== ""){
      let user = {
        username: props.username,
        room: props.room,
      }
      props.socket.emit("join", user);
    } else {
      document.getElementById("error").innerHTML = "You must fill in both fields."
    }
  }

  return (
    <div>
      <h1>Game Over!</h1>
      <h2>Rankings:</h2>
      <ul>{props.users.map((user, index) => (
          <li key={user + index}>{user.username} | Score: {user.score}</li>
      ))}</ul>
      <button className="page-buttons" onClick={returnMenu}>Exit to Main Menu</button>
      <button className="page-buttons" onClick={rejoinRoom}>Rejoin Room</button>
    </div>
  );
}

export default End;
