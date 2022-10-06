import React from "react";

const CustomerFilter = (props) => {
  //console.log(props);
  return (
    <>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onFilterClick("all")}
      >
        Customers
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onFilterClick("active")}
      >
        Active
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onFilterClick("inactive")}
      >
        Inactive
      </button>
    </>
  );
};

export default CustomerFilter;

/*  <>
      <button className="btn btn-primary btn-sm m-2" onClick={props.onAllClick}>
        Customers
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={props.onActiveClick}
      >
        Active
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={props.onInactiveClick}
      >
        Inactive
      </button>
    </> */
