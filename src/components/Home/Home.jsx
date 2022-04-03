import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo512 from "../../components/logo512.png";

function Home(props) {
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    props.socket.on("return roomname", (data) => {
      props.setVars(username, data);
    });
    props.socket.on("update users", (data) => {
      props.setUsers(data);
      navigate("/lobby");
    });
    props.socket.on("already started", (data) => {
      alert("This room already has a game in progress.");
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
      alert("You must fill in both fields.");
    }
  };

  const joinPublicRoom = () => {
    if (username !== "") {
      setUsername("Guest");
    }
    props.socket.emit("joinPublic", username);
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
    <div
      className="page-container"
    >
      <div className="page-home-container">
        <div className="top">
          <h1 className="page-headers">
            <img className="big-s" src={logo512} />
            <span className="raise-to-meet-logo">pardle!</span>
          </h1>
          <input
            autoFocus
            placeholder="Username..."
            className="page-inputs"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        </div>

        <div className="home-outer-container">
          <div className="home-inner-container">
            {/* <img className="spardletan" src={spardletan} /> */}
            <button
              className="top-buttons red"
              onClick={joinPublicRoom}
            >
              <h2>Click here to join a public room!</h2>
              <p>
                Quickly join a match and play against people from all around the
                world, first to 5 wins!
              </p>
            </button>
            <div
              className="top-buttons blue"
            >
              <h2>Join a room with friends!</h2>
              <p>
                Get your friends together and play in a name-accessible private
                lobby!
              </p>
              <input
                placeholder="Room Name..."
                className="page-inputs"
                onChange={(e) => {
                  setRoomName(e.target.value.toLowerCase());
                }}
              ></input>
              <button
                className="page-buttons"
                id="join-button"
                onClick={joinRoom}
              >
                Join Room
              </button>
            </div>
            <Link
              className="bottom-buttons green"
              to="/rules"
            >
              <div className="green"
              >
                <h2>Rules</h2>
                <p>
                  Never played before? No problem! We'll get you up to speed.
                </p>
              </div>
            </Link>
            <Link
              className="bottom-buttons yellow"
              to="/about"
            >
              <div
              className="yellow"
              >
                <h2>About</h2>
                <p>
                  A game created by Kyle Macasilli-Tan. Check out the story
                  behind it here.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
