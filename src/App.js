import "./App.css";
import React, { Component } from "react";
import Item from "./components/Item";

class App extends Component {
  constructor() {
    super();

    this.state = {
      groceries: [
        {
          item: "Milk",
          units: "1 gallon",
          quantity: 2,
          isPurchased: false,
        },
        {
          item: "Eggs",
          units: "1 Dozen",
          quantity: 1,
          isPurchased: false,
        },
        {
          item: "Tea",
          units: "12 pack",
          quantity: 3,
          isPurchased: false,
        },
      ],
    };
  }

  addItem(e) {
    e.preventDefault();
    const newItem = { [e.target.id]: e.target.value };

    this.setState({
      groceries: [...this.state.groceries, newItem],
    });
  }

  render() {
    console.log(this.state.groceries);
    return (
      <div className="App">
        <form onSubmit={(e) => this.addItem(e)}>
          <label htmlFor="item">Item:</label>
          <input
            type="text"
            id="item"
            onChange={this.handleChange}
            value={this.state.item}
          />

          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            onChange={this.handleChange}
            value={this.state.quantity}
          />

          <label htmlFor="units">Unit:</label>
          <input
            type="text"
            id="units"
            onChange={this.handleChange}
            value={this.state.units}
          />

          <button>+</button>
        </form>

        {this.state.groceries.map((groceryItem) => {
          return (
            <Item
              key={groceryItem.item}
              item={groceryItem.item}
              quantity={groceryItem.quantity}
              units={groceryItem.units}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
