import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = (count = 0, action) => {
  if (action.type === "add") {
    count++;
  } else if (action.type === "minus") {
    count--;
  }
  return count;
};

const store = createStore(reducer);

console.log(store.getState());

const onChange = () => {
  number.innerText = store.getState();
};

store.subscribe(onChange);

const handleAdd = () => {
  store.dispatch({ type: "add" });
};
const handleMinus = () => {
  store.dispatch({ type: "minus" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
