import { Joi } from "joi-browser";
import React, { Component } from "react";
import { getCustomer, saveCustomer } from "../services/fakeCustomerService";
import Form from "./common/form";

class CustomerForm extends Form {
  state = {
    data: {
      name: "",
      surname: "",
      email: "",
      birth_date: "",
      errors: {},
    },
  };

  schema = {
    _id: Joi.string(),
    name: Joi.string().required().min(2).max(50).label("Name"),
    surname: Joi.string().required().min(2).max(50).label("Surname"),
    email: Joi.string().required().min(2).label("Email"),
    birth_date: Joi.string().required().label("Date of birth"),
  };

  componentDidMount() {
    const customerId = this.props.match.params.id;
    if (customerId === "new") return;

    const customer = getCustomer(customerId);
    if (!customer) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(customer) });
  }

  mapToViewModel(customer) {
    return {
      _id: customer._id,
      name: customer.name,
      surname: customer.surname,
      email: customer.email,
      birth_date: customer.birth_date,
    };
  }

  render() {
    return (
      <div>
        <h1>Customer Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("surname", "Surname")}
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("passwords", "Repeat password", "password")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default CustomerForm;
