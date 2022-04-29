import React, { useState } from "react";
import { connect } from "react-redux";
import { addToDo } from "../store";
import Del from "./Del";

const Home = ({ state, dispatch }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    dispatch(addToDo(text));
  };
  console.log(state);

  return (
    <>
      <div>Home</div>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      {state.map((e) => (
        <li key={e.id}>
          {e.text}
          <Del id={e.id} />
        </li>
      ))}
      <ul></ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return { state };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
