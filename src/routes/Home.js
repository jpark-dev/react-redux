import React, { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  };
  const onSumbit = e => {
    console.log("submited!");
    e.preventDefault();
  };
  return (
    <>
      <h1>To do</h1>
      <form onSubmit={onSumbit}>
        <input type="text" value={text} onChange={onChange} />
        <input type="submit" value="Add" />
      </form>
      <ul></ul>
    </>
  );
}
