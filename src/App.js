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
        completed: false,
        location: ''
      },
      {
        id: 2,
        title: 'Label Printer',
        completed: false,
        location: ''
      },
      {
        id: 3,
        title: 'UPS Envelopes',
        completed: false,
        location: ''
      },
    ]
  }

  // Toggle Complete
  updateLocation = (id, newLocation) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.location = newLocation
        console.log(todo.location)
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

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos}
          updateLocation={this.updateLocation}
          delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
