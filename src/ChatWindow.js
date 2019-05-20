import React, { Component } from "react";
import "./App.css";
import AddMessage from "./AddMessage";
import MessageList from "./MessageList";

export default class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { username: "Amy", text: "Hi, Jon!" },
        { username: "Amy", text: "How are you?" },
        { username: "John", text: "Hi, Amy! Good, you?" }
      ]
    };
  }
  render() {
    return (
      <div className="container">
        <div className="chat-window">
          <h2>Super Awesome Chat</h2>
          <div className="name sender">{this.props.users[0].username}</div>
          <MessageList
            messages={this.state.messages}
            users={this.props.users}
          />

          <AddMessage />
        </div>

        <div className="chat-window">
          <h2>Super Awesome Chat</h2>
          <div className="name sender">{this.props.users[1].username}</div>
          <MessageList
            messages={this.state.messages}
            users={this.props.users}
          />

          <AddMessage />
        </div>
      </div>
    );
  }
}
