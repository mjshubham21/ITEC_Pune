import { useEffect } from "react";
import PropTypes from "prop-types";

const UseEffect = ({ name }) => {
  const message = `Hello, ${name}!`;

  useEffect(() => {
    document.title = `Greetings to ${name}`;
  }, [name]);

  return (
    <>
      <h2>useEffect hook</h2>
      <div>{message}</div>
    </>
  );
};

// Add prop validation
UseEffect.propTypes = {
  name: PropTypes.string.isRequired, // Specify the prop type and whether it's required
};

export default UseEffect;
