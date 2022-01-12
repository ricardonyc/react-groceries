import './App.css';
import React, { Component } from 'react'


class App extends Component {
  constructor(){
    super()

    this.state = {
      groceries: [
        {
          item: 'Milk',
          brand: 'Cow',
          units: '1 gallon',
          quantity: 2,
          isPurchased: false
        },
        {
          item: 'Eggs',
          brand: 'Chicken',
          units: '1 Dozen',
          quantity: 1,
          isPurchased: false
        },
        {
          item: 'Tea',
          brand: 'Yogi',
          units: '12 pack',
          quantity: 3,
          isPurchased: false
        }
      ],
    }
  }



  render(){
    return(
      <div>
        
      </div>
    )
  }
}







export default App;