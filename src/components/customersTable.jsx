import React, { Component } from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";

/* import "react-initials-avatar/lib/ReactInitialsAvatar.css"; */

class CustomersTable extends Component {
  columns = [
    { path: "avatar", key: "avatar" },
    {
      path: "name",
      label: "Name",
      content: (customer) => (
        <Link to={`/customers/${customer._id}`}>{customer.name}</Link>
      ),
    },
    { path: "surname", label: "Surname" },
    { path: "email", label: "Email" },
    { path: "birth_date", label: "Date of birth" },
  ];

  render() {
    const { customers, sortColumn, onSort } = this.props;

    return (
      <div className="container componentBg">
        <Table
          data={customers}
          sortColumn={sortColumn}
          onSort={onSort}
          columns={this.columns}
        />
      </div>
    );
  }
}

export default CustomersTable;
