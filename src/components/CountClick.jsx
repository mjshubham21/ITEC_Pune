import { Component } from "react";
import PropTypes from "prop-types";
import UpdatedCounter from "./UpdatedCounter";

class CountClick extends Component {
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
    // const { count } = this.state;
    const { count, incrementcounter } = this.props;
    return (
      <>
        <div>
          {/* click handler on the button */}
          {/* in the onclick handler it is going to be just increamentcounter but notthis.increamentcounter */}
          <h2>Count Click for HOC.</h2>
          <button onClick={incrementcounter}>Clicked {count}</button>
        </div>
      </>
    );
  }
}

export default UpdatedCounter(CountClick);

CountClick.propTypes = {
  count: PropTypes.number.isRequired, // Example validation for 'count' prop
  incrementcounter: PropTypes.func.isRequired, // Example validation for 'incrementcounter' prop
};
