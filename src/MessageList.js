import React, { Component } from "react";
import "./App.css";

export default class MessageList extends Component {
  render() {
    return (
      <ul className="message-list">
        {this.props.messages.map((message, index) => (
          <li
            key={index}
            className={
              message.username === this.props.users[0].username
                ? "message sender"
                : "message recipient"
            }
          >
            <p>{`${message.username}: ${message.text}`}</p>
          </li>
        ))}
      </ul>
    );
  }
}
