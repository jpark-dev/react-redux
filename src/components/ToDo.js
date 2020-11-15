import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

function ToDo({ text, onClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps);
  return {
    onClick: () => dispatch(remove(ownProps.id)),
  };
}
export default connect(null, mapDispatchToProps)(ToDo);
