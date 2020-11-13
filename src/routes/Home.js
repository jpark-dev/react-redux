import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  };
  const onSumbit = e => {
    console.log("submited!");
    addToDo(text);
    e.preventDefault();
  };

  return (
    <>
      <h1>To do</h1>
      <form onSubmit={onSumbit}>
        <input type="text" value={text} onChange={onChange} />
        <input type="submit" value="Add" />
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

const mapStateToProps = state => {
  return { toDos: state };
};

const mapDispatchToProps = dispatch => {
  return { addToDo: text => dispatch(actionCreators.addToDo(text)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
