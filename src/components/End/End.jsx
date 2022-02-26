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

  return (
    <div>
      <h1>Game Over!</h1>
      <h2>Rankings:</h2>
      <ul>{props.users.map((user, index) => (
          <li key={user + index}>{user.username} | Score: {user.score}</li>
      ))}</ul>
    </div>
  );
}

export default End;
