import React from "react";
import SearchBox from "./searchBox";
import CustomerFilter from "./customerFilter";

const FilterBox = (props) => {
  return (
    <div className="container componentBg">
      <div className="row">
        <div className="col-5">
          <SearchBox value={props.value} onChange={props.onChange} />
        </div>
        <div className="col-7">
          <div className="d-flex flex-row-reverse bd-highlight">
            <CustomerFilter onFilterClick={props.onFilterClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
