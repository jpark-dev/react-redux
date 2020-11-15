import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDo = createSlice({
  name: "toDoReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.unshift({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      return state.filter(toDo => toDo.id !== parseInt(action.payload));
    },
  },
});

export const { add, remove } = toDo.actions;

export default configureStore({ reducer: toDo.reducer });
