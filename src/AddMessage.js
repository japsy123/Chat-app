import React, { Component } from "react";
import "./App.css";

export default class AddMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMessage: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {};
    console.log(this.props.username);
    user.username = this.props.username;
    user.text = this.state.inputMessage;
    console.log(user);
    this.props.pushMessage(user);
    // Push the message and username in a function
  }
  isDisabled = () => {
    return this.state.inputMessage === "";
  };

  handleChange(e) {
    this.setState({
      inputMessage: e.target.value
    });
  }
  render() {
    return (
      <div>
        <form className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            onChange={this.handleChange}
            value={this.state.inputMessage}
            username={this.props.username}
          />
          <div className="input-group-append">
            <button onClick={this.handleSubmit} disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}
