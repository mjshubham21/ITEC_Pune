//HOC
import { Component } from "react";

const UpdatedCounter = (OriginalComponent) => {
  class NewComponent extends Component {
    //class component inside functional component...
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementcounter = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementcounter={this.incrementcounter}
          name="XYZ"
        />
      );
    }
  }

  return NewComponent;
};

export default UpdatedCounter;
