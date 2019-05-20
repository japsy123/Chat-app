import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ChatWindow from "./ChatWindow";

class App extends Component {
  constructor(props) {
    super(props);
    this.users = [{ username: "Amy" }, { username: "John" }];
  }

  isDisabled = () => {
    return false;
  };

  render() {
    return (
      <div className="App">
        <ChatWindow users={this.users} />
      </div>
    );
  }
}

export default App;
