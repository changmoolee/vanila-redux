import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handAdd = () => {
  count += 1;
  updateText();
};
const handMinus = () => {
  count -= 1;
  updateText();
};

add.addEventListener("click", handAdd);
minus.addEventListener("click", handMinus);
