import "./styles.css";
import React, { useState } from "react";

var signDictionary = {
  "♈": " Aries",
  "♉": "Taurus",
  "♊": "Gemini",
  "♋": "Cancer",
  "♌": "Leo",
  "♍": "Virgo",
  "♎": "Libra",
  "♏": "Scorpio",
  "♐": "Sagittarius",
  "♑": "Capricon",
  "♒": "Aquarius",
  "♓": "Pisces",
  "⛎": "Ophiuchus"
};

var list = Object.keys(signDictionary);

export default function App() {
  var [sign, setSign] = useState("");
  var [message, setMessage] = useState("meaning wil appear here..");

  function changeHandeler(event) {
    var userInput = event.target.value;
    setSign(userInput);
    var sign = signDictionary[userInput];
    if (userInput in signDictionary) {
      setMessage(signDictionary[userInput]);
    } else {
      setMessage("choose from the given option only");
    }
  }

  function clickHandeler(item) {
    var sign = signDictionary[item];
    setMessage(signDictionary[item]);
  }

  return (
    <div className="App">
      <h1> Zodiac sign checker</h1>
      <input
        onChange={changeHandeler}
        placeholder="search zodiac sign here.."
        style={{
          border: "2px solid black",
          minWidth: "80%",
          padding: "0.8rem",
          marginTop: "1rem"
        }}
      />
      <h2>{sign}</h2>
      <h3>{message}</h3>
      {list.map(function (item) {
        return (
          <span
            key={item}
            style={{ cursor: "pointer", fontSize: "1.7rem", margin: "0.5rem" }}
            onClick={() => clickHandeler(item)}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
