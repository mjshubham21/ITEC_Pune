import React, { Component } from "react";

export default class ChangeColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "lightgreen",
    };
    this.changecolo = this.changecolo.bind(this);
    this.changecolos = this.changecolos.bind(this);
  }

  changecolo() {
    this.setState({
      color: "red",
    });
  }
  changecolos() {
    this.setState({
      color: "lightgreen",
    });
  }
  render() {
    return (
      <div>
        <p style={{ color: this.state.color }}>
          Color of the text is {this.state.color}
        </p>
        <button onClick={this.changecolo}>Change</button>
        <button onClick={this.changecolos}>ChangeBack</button>
      </div>
    );
  }
}
