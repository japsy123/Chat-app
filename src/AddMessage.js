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

  handleSubmit() {}
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
          />
          <div className="input-group-append">
            <button onSubmit={this.handleSubmit} disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}
