import React, { Component } from "react";
import { getCustomers } from "./../services/fakeCustomerService";
import Pagination from "./pagination";
import { paginate } from "./../utils/paginate";
import CustomerFilter from "./customerFilter";
import CustomersTable from "./customersTable";
import _ from "lodash";
import NavBar from "./navBar";

class Customers extends Component {
  state = {
    customers: getCustomers(),
    pageSize: 7,
    currentPage: 1,
    sortColumn: { path: "name", order: "asc" },
  };

  handleDelete = (customer) => {
    const customers = this.state.customers.filter(
      (c) => c._id !== customer._id
    );
    this.setState({ customers });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleFilterClick = (id) => {
    if (id === "active") {
      const active = getCustomers().filter((c) => c.isActive);
      this.setState({ customers: active });
      console.log(active);
    } else if (id === "inactive") {
      const inactive = getCustomers().filter((c) => !c.isActive);
      this.setState({ customers: inactive });
      console.log(inactive);
    } else {
      this.setState({ customers: getCustomers() });
      console.log(this.state.customers);
    }
  };

  handleSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };

  render() {
    const { length: count } = this.state.customers;
    const {
      pageSize,
      currentPage,
      customers: allCustomers,
      sortColumn,
    } = this.state;

    if (count === 0) return <p>There are no customers in the database.</p>;

    const sorted = _.orderBy(
      allCustomers,
      [sortColumn.path],
      [sortColumn.order]
    );

    const customers = paginate(sorted, currentPage, pageSize);

    return (
      <React.Fragment>
        <NavBar />
        <CustomerFilter onFilterClick={(id) => this.handleFilterClick(id)} />

        <p>Showing {count} customers in the database.</p>

        <CustomersTable
          customers={customers}
          onSort={this.handleSort}
          sortColumn={sortColumn}
        />

        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Customers;
