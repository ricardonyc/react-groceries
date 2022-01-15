import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="item-box">
        <h2>Item: {this.props.item}</h2>
        <h4>Quantity: {this.props.quantity}</h4>
        <h4>Count: {this.props.units}</h4>
      </div>
    );
  }
}

export default Item;

// con
//est
// rsf
// rcc
// rsc

