// import { createStore } from "redux";
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

// export const addToDo = createAction("ADD");
// export const deleteToDo = createAction("DELETE");

// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) => {
//     return state.filter((e) => e.id !== action.payload);
//   },
// });
/////////////////

// const ADD = "ADD";
// const DELETE = "DELETE";

// export const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// export const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id,
//   };
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [{ text: action.text, id: Date.now() }, ...state];
//     case DELETE:
//       return state.filter((e) => e.id !== action.id);
//     default:
//       return state;
//   }
// };

const toDo = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    deleteToDo: (state, action) => state.filter((e) => e.id !== action.payload),
  },
});

const store = configureStore({ reducer: toDo.reducer });

console.log(toDo.actions);

export const { addToDo, deleteToDo } = toDo.actions;

export default store;
