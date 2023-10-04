import { Component } from "react";
import PropTypes from "prop-types";
import UpdatedCounter from "./UpdatedCounter";

class Hover extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       count: 0,
  //     };
  //   }

  //   incrementcounter = () => {
  //     this.setState((prevState) => {
  //       return { count: prevState.count + 1 };
  //     });
  //   };

  render() {
    // const {count} =this.state;
    const { count, incrementcounter } = this.props;
    return (
      <>
        <h2>Hover for HOC.</h2>
        <h1 onMouseOver={incrementcounter}>Hovered {count} times</h1>
      </>
    );
  }
}

export default UpdatedCounter(Hover);

Hover.propTypes = {
  count: PropTypes.number.isRequired, // Example validation for 'count' prop
  incrementcounter: PropTypes.func.isRequired, // Example validation for 'incrementcounter' prop
};
