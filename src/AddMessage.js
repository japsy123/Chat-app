import React, { Component } from "react";
import "./App.css";

export default class AddMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMessage: ""
    };
  }
  isDisabled = () => {
    return this.state.inputMessage === "";
  };
  render() {
    return (
      <div>
        <form className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
          />
          <div className="input-group-append">
            <button disabled={this.isDisabled()}>SEND</button>
          </div>
        </form>
      </div>
    );
  }
}
