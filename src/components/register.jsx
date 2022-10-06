import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        <h1>Zaczynamy!</h1>
        <form className="m-4">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Repeat Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
            />
          </div>

          <button type="submit" className="btn btn-primary customized-btn">
            <Link to="/customers">Register</Link>
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
