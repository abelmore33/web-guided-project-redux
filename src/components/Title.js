import React from "react";

import TitleDisplay from "./TitleDisplay";
import TitleForm from "./TitleForm";
import { connect } from "react-redux";

const Title = (props) => {
  return <div>{!props.editing ? <TitleDisplay /> : <TitleForm />}</div>;
};

const mapStateToProps = (state) => {
  return {
    editing: state.title.editing,
  };
};
export default connect(mapStateToProps, {})(Title);
