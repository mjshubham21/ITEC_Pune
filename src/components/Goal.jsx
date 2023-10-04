// import React from "react";
import PropTypes from "prop-types";

function Scored() {
  return <h1>Goal!!!</h1>;
}

function NonScore() {
  return <h1>Lost!!!</h1>;
}

//conditional render
export default function Goal(props) {
  const isGoal1 = props.isGoal;
  if (isGoal1) {
    return <Scored />;
  }
  return <NonScore />;
}

// Add prop validation
Goal.propTypes = {
  isGoal: PropTypes.bool.isRequired, // Specify the prop type and whether it's required
};
