import React from "react";

const Input = ({ name, label, value, onChange, error }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        autoFocus
        className="form-control"
        id={name}
        name={name}
        aria-describedby="emailHelp"
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
      <div id="emailHelp" className="form-text">
        {`We'll never share your ${name} with anyone else.`}
      </div>
    </div>
  );
};

export default Input;
