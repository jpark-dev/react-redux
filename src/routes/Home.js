import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { add } from "../store";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  };
  const onSumbit = e => {
    e.preventDefault();
    addToDo(text);
    setText("");
  };

  return (
    <>
      <h1>To do</h1>
      <form onSubmit={onSumbit}>
        <input type="text" value={text} onChange={onChange} />
        <input type="submit" value="Add" />
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = state => {
  return { toDos: state };
};

const mapDispatchToProps = dispatch => {
  return { addToDo: text => dispatch(add(text)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
