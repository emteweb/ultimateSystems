import React, { Component } from "react";
import { getCustomers } from "./../services/fakeCustomerService";
import Pagination from "./pagination";
import { paginate } from "./../utils/paginate";
import CustomersTable from "./customersTable";
import _ from "lodash";
import NavBar from "./navBar";
import FilterBox from "./filterBox";
import EditButton from "./editButton";

class Customers extends Component {
  state = {
    customers: [],
    pageSize: 6,
    currentPage: 1,
    searchQuery: "",
    sortColumn: { path: "name", order: "asc" },
  };

  componentDidMount() {
    this.setState({ customers: getCustomers() });
  }

  /*   handleDelete = (customer) => {
    const customers = this.state.customers.filter(
      (c) => c._id !== customer._id
    );
    this.setState({ customers });
  }; */

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleFilterClick = (id) => {
    if (id === "active") {
      const active = getCustomers().filter((c) => c.isActive);
      this.setState({ customers: active });
      console.log("Active: ", active);
      console.log("State in ACTIVE: ", this.state.customers);
      console.log(this.state.customers.length);
    } else if (id === "inactive") {
      const inactive = getCustomers().filter((c) => !c.isActive);
      this.setState({ customers: inactive });
      console.log("Inactive: ", inactive);
      console.log("State in INACTIVE: ", this.state.customers);
    } else {
      this.setState({ customers: getCustomers() });
      console.log("State in ALL: ", this.state.customers);
    }
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  render() {
    const { length: count } = this.state.customers;
    const {
      pageSize,
      currentPage,
      customers: allCustomers,
      sortColumn,
      searchQuery,
    } = this.state;

    if (count === 0) return <p>There are no customers in the database.</p>;

    let sorted = _.orderBy(allCustomers, [sortColumn.path], [sortColumn.order]);

    if (searchQuery)
      sorted = allCustomers.filter(
        (c) =>
          c.name.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
          c.surname.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    const customers = paginate(sorted, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="mainContainer">
          <NavBar />

          <FilterBox
            value={searchQuery}
            onChange={this.handleSearch}
            onFilterClick={(id) => this.handleFilterClick(id)}
          />

          <EditButton />

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
        </div>
      </React.Fragment>
    );
  }
}

export default Customers;
