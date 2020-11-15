import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//
//     case deleteToDo.type:
//       return state.filter(toDo => toDo.id !== parseInt(action.payload));
//     default:
//       return state;
//   }
// };

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    // not returning as the state is being mutated.
    state.unshift({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) => {
    // return if a new state is created.
    return state.filter(toDo => toDo.id !== parseInt(action.payload));
  },
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
