import React from "react";
import { connect } from "react-redux";
import { deleteToDo } from "../store";
const Del = ({ dispatch, ownProps }) => {
  const onClick = () => {
    dispatch(deleteToDo(ownProps.id));
  };

  return <div onClick={onClick}>Del</div>;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch,
    ownProps,
  };
};

export default connect(null, mapDispatchToProps)(Del);
