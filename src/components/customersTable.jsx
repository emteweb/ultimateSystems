import React from "react";

const CustomersTable = (props) => {
  const { customers, onSort } = props;

  const renderSortIcon = () => {
    if (props.sortColumn.order === "asc")
      return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Avatar</th>
          <th className="clickable" onClick={() => onSort("name")}>
            Name {renderSortIcon()}
          </th>
          <th className="clickable" onClick={() => onSort("surname")}>
            Surname {renderSortIcon()}
          </th>
          <th className="clickable" onClick={() => onSort("email")}>
            Email {renderSortIcon()}
          </th>
          <th className="clickable" onClick={() => onSort("date-of-birth")}>
            Date-of-birth {renderSortIcon()}
          </th>
          <th />
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer._id}>
            <td></td>
            <td>{customer.name}</td>
            <td>{customer.surname}</td>
            <td>{customer.email}</td>
            <td>{customer.birth_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomersTable;
