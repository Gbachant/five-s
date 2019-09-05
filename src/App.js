import React, { Component } from 'react';
import Header from './components/layout/Header.js'
import Stations from './components/Stations.js';
import AddComment from './components/AddComment.js';
import './App.css';

class App extends Component {

  state = {
    stations: [
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
    this.setState({ stations: this.state.stations.map(station => {
      if(station.id === id) {
        station.location = newLocation
        console.log(station.title + ': ' + station.location)
      }
      return station;
    }) });
  }

  // Delete Item
  delItem = (id) => {
    this.setState({ stations: [...this.state.stations.filter(station => station.id !== id)] });
  }

  // Add Comment
  addComment = (comment) => {
    const newComment = {
      comment: comment
    }
    this.setState({ stations: [...this.state.stations, newComment] });
    console.log(this)
  }

  // Update Item Quanity
  addQuantity = (id, newQuantity) => {
    this.setState({ stations: this.state.statios.map(station => {
      if(station.id === id) {
        station.quantity = newQuantity
        console.log(station.title + ': ' + station.quantity)
      }
      return station;
    }) });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Stations stations={this.state.stations}
          updateLocation={this.updateLocation}
          delItem={this.delItem}
          addQuantity={this.addQuantity}/>
          <AddComment addComment={this.addComment}/>
        </div>
      </div>
    );
  }
}

export default App;
