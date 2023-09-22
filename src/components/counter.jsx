import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBagdeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(this.product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  //Methods

  getBagdeClasses() {
    let classes = "badge m-2 bg-";
    //if formatCount is Zero, the className "bg" appends "warning", otherwise, it appends "primary"
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
