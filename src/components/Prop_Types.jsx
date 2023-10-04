// import React from 'react'
import PropTypes from "prop-types";

export default function Prop_Types({ name, age, grade, address }) {
  return (
    <>
      {`${name} is now turning to ${age + 5} from grade ${grade} lives in ${
        address.flatno
      } ${address.city}. `}
    </>
  );
}

Prop_Types.propTypes = {
  // All props must be validated.
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  grade: PropTypes.number.isRequired,
  address: PropTypes.object.isRequired,
};

Prop_Types.defaultProps = {
  grade: 3,
  address: { flatno: 303, city: "Pune" },
};
