import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  state = {};
  render() {
    return (
      <div className="card loginContainer">
        <div className="card-body">
          <h5 className="card-title loginTitle">Zaczynamy</h5>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("password", "Repeat password", "password")}
            <div className="formInput">{this.renderButton("Login")}</div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
