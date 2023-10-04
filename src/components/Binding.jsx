import { Component } from "react";

export default class Binding extends Component {
  constructor() {
    super();
    this.state = {
      subject: "ReactJs",
    };
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        Bind 1.
        <h4 style={{ color: "#68cf48" }}>ITEC</h4>
        <p>
          {" "}
          <b> {this.state.subject} </b> One way data binding.{" "}
        </p>
        <p>Implementing Component to View Data Binding: </p>
      </div>
    );
  }
}
