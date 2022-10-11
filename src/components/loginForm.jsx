import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import Customers from "./customers";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div className="card formContainer">
        <div className="card-body">
          <h5 className="card-title loginTitle">Logowanie</h5>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Email")}
            {this.renderInput("password", "Password", "password")}
            <div className="formInput">{this.renderButton("Login")}</div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;

/* import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "./common/input";
import Joi, { errors } from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    account: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required(),
    password: Joi.string().required(),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted :)");
  };

  handleChange = (e) => {
    const { account } = this.state.account;
    account[e.currentTarget.name] = e.currentTarget.name;
    this.setState({ account });
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div className="wrapper">
        <h1>Logowanie</h1>
        <form className="m-4" onSubmit={this.handleSubmit}>
          <Input
            name="email"
            type="text"
            value={account.email}
            label="Email address"
            onChange={this.handleChange}
            error={errors.email}
          />

          <Input
            name="password"
            type="password"
            value={data.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />

          <button disabled={this.validate()} className="customized-btn">
            Login
            <Link to="/customers"></Link>
          </button>
          <div className="middle">
            <p className="par1">Don't have an account?</p>
            <button className="btn btn-light btn-sm">
              <Link className="register" to="/register">
                Register
              </Link>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
 */
