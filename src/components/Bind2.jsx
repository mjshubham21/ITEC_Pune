import { Component } from "react";

export default class Bind2 extends Component {
  constructor() {
    super();
    this.state = {
      subject: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      subject: e.target.value,
    });
  };

  render() {
    return (
      <div>
        Bind 2.
        <h4 style={{ color: "#68cf48" }}>IEC</h4>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Enter subject."
        />
        <p>
          <b>{this.state.subject}</b> From View to Component.
        </p>
      </div>
    );
  }
}
