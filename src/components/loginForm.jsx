import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "./common/input";
import Joi, { errors } from "joi-browser";

class LoginForm extends Component {
  state = {
    account: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required(),
    password: Joi.string().required(),
  };

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    console.log(result);
    const errors = {};

    const { account } = this.state;
    if (account.email.trim() === "") errors.email = "Email is required.";
    if (account.password.trim() === "")
      errors.password = "Password is required.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Call the server
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    // Call the server
    console.log("Submitted :)");
  };

  validateProperty = ({ name, value }) => {
    if (name === "email") {
      if (value.trim() === "") return "Email is required.";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required.";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;

    return (
      <div className="wrapper">
        <h1>Logowanie</h1>
        <form className="m-4" onSubmit={this.handleSubmit}>
          <Input
            name="email"
            value={account.email}
            label="Email address"
            onChange={this.handleChange}
            error={errors.email}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />

          <button type="submit" className="btn btn-primary customized-btn">
            {/* <Link className="loginButton" to="/customers">
              Login
            </Link> */}
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
