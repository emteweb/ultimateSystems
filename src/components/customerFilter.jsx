import React from "react";

const CustomerFilter = (props) => {
  return (
    <>
      <button
        className="btn-new m-2 my-3"
        onClick={() => props.onFilterClick("all")}
      >
        Customers
      </button>
      <button
        className="btn btn-primary m-2 my-3"
        onClick={() => props.onFilterClick("active")}
      >
        Active
      </button>
      <button
        className="btn btn-primary m-2 my-3"
        onClick={() => props.onFilterClick("inactive")}
      >
        Inactive
      </button>
    </>
  );
};

export default CustomerFilter;
