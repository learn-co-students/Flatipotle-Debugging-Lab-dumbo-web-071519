import React, { Component } from 'react'
import './App.css'
//changed import statements to go into component folder
import Form from './components/Form'
import Order from './components/Order'

class App extends Component {
  // had to change state to a equal sign instead of a colon
  state =  {
    orders: []
  }

  addOrder = (order) => {
    this.setState({
      orders: this.state.orders.concat(order)
    })
  }

  generateOrders = () => {
    return this.state.orders.map((order, idx) => {
      return <Order key={idx} {...order} />
    })
  }
// had to add a return statement to the arrow funtion on line 20
  render() {

    

    return (
      <div className="App">
        <header className="App-header">
          <img src={ require('./images/logo.png') } className="App-logo" alt="logo" />
        </header>

        <Form addOrder={this.addOrder}/>

        <div className="ui raised container segment">
          <h1 className="ui block header">All Orders</h1>
          <div className="ui three cards">
            {this.generateOrders()}
          </div>
        </div>
      </div>
    )
  }
}

export default App
