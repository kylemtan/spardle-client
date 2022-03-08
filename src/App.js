import React from "react";
import "./App.css";
import io from "socket.io-client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Lobby from "./components/Lobby/Lobby.jsx";
import Game from "./components/Game/Game.jsx";
import End from "./components/End/End.jsx";
import About from "./components/About/About.jsx";
import Rules from "./components/Rules/Rules.jsx";
import { useState } from "react";

const socket = io.connect("http://localhost:1337");
// const socket = io.connect("https://spardle.herokuapp.com/");

function App() {
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");
  const [words, setWords] = useState([]);
  const [users, setUsers] = useState([]);
  const [finalWord, setFinalWord] = useState("");

  const setVars = (username, room) => {
    setUsername(username);
    setRoomName(room);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setUsers={(e) => {
                setUsers(e);
              }}
              setVars={setVars}
              socket={socket}
            />
          }
        />
        <Route
          path="/lobby"
          element={
            <Lobby
              setUsers={(e) => {
                setUsers(e);
              }}
              users={users}
              socket={socket}
              words={words}
              setWords={(i) => {
                setWords(i);
              }}
              room={roomName}
            />
          }
        />
        <Route
          path="/game"
          element={
            <Game
              setUsers={(e) => {
                setUsers(e);
              }}
              socket={socket}
              users={users}
              room={roomName}
              words={words}
              setFinalWord={(e) => {
                setFinalWord(e);
              }}
            />
          }
        />
        <Route
          path="/end"
          element={
            <End
              setUsers={(e) => {
                setUsers(e);
              }}
              socket={socket}
              users={users}
              username={username}
              words={words}
              room={roomName}
              finalWord={finalWord}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
