import React, { Component } from "react";
import "./resources/styles.css";
import CountdownClock from "./components/countdown/countdownClock";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background:"#111111" }}>
      <CountdownClock/>
      </div>
    );
  }
}

export default App;
