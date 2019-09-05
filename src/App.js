import React, { Component } from 'react';
import Header from './components/layout/Header.js'
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo.js';
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Computer',
        objectType: 'Tool',
        completed: false,
        location: '',
        quantity: '',
        quantityType: 'N/A'
      },
      {
        id: 2,
        title: 'Label Printer',
        objectType: 'Tool',
        completed: false,
        location: '',
        quantity: '',
        quantityType: 'Boolean'
      },
      {
        id: 3,
        title: 'FLO Kit',
        objectType: 'Tool',
        completed: false,
        location: '',
        quantity: '',
        quantityType: 'Integer'
      },
      {
        id: 4,
        title: 'Calipers',
        objectType: 'Tool',
        completed: false,
        location: '',
        quantity: '',
        quantityType: 'Integer'
      },
      {
        id: 5,
        title: 'Red Tape',
        objectType: 'Product',
        completed: false,
        location: '',
        quantity: '',
        quantityType: 'Boolean'
      }
    ]
  }

  // Update Item Location
  updateLocation = (id, newLocation) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.location = newLocation
        console.log(todo.title + ': ' + todo.location)
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  // Update Item Quanityt
  addQuantity = (id, newQuantity) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.quantity = newQuantity
        console.log(todo.title + ': ' + todo.quantity)
      }
      return todo;
    }) });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Todos todos={this.state.todos}
          updateLocation={this.updateLocation}
          delTodo={this.delTodo}
          addQuantity={this.addQuantity}/>
          <AddTodo addTodo={this.addTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
