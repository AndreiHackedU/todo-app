import React from "react";
export default (props) => (
  <button
    value={props.number}
    key={props.number}
    className="btn btn-info"
    onClick={(event) => props.assignNumber(event)}
  >
    {props.number}
  </button>
);
