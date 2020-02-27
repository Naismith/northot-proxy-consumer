import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({ menus: [] });

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/naismithdev.myshopify.com/apps/proxy"
      )
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(err => {});
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {data?.menus.map(item => {
          return (
            <code style={{ marginBottom: "2rem" }}>{JSON.stringify(item)}</code>
          );
        })}
      </header>
    </div>
  );
}

export default App;
