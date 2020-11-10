import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

const countModifier = (state = 0) => {
  console.log(state);
  return ++state;
};

const countStore = createStore(countModifier);

console.log(countStore.getState());

// let count = 0;
// number.innerText = count;
//
// const updateText = () => {
//   number.innerText = count;
// };
//
// const handleAdd = () => {
//   count++;
//   updateText();
// };
//
// const handleMinus = () => {
//   count--;
//   updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
