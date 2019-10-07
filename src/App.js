import React, { Component } from 'react';
import Header from './components/layout/Header.js';
import ChooseAudit from './components/ChooseAudit.js';
import Stations from './components/Stations.js';
import Violations from './components/Violations.js';
import AddComment from './components/AddComment.js';
import Confirm from './components/layout/Confirm.js';
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
      },
      {
        id: 6,
        title: 'Abutment Case Bin',
        objectType: 'Product',
        completed: false,
        location: '',
        quantity: '',
        quantityType: 'Integer'
      },
      {
        id: 7,
        title: 'Abutment Lid Bin',
        objectType: 'Product',
        completed: false,
        location: '',
        quantity: '',
        quantityType: 'Integer'
      },
      {
        id: 8,
        title: 'AIG Case Bin',
        objectType: 'Product',
        completed: false,
        location: '',
        quantity: '',
        quantityType: 'Integer'
      },
      {
        id: 9,
        title: 'AIG Lid Bin',
        objectType: 'Product',
        completed: false,
        location: '',
        quantity: '',
        quantityType: 'Integer'
      },
      {
        id: 10,
        title: 'Screwdrivers',
        objectType: 'Tool',
        completed: false,
        location: '',
        quantity: '',
        quantityType: 'Integer'
      },
      {
        id: 11,
        title: 'Plastic Bag Bin',
        objectType: 'Product',
        completed: false,
        location: '',
        quantity: '',
        quantityType: 'Integer'
      },
      {
        id: 12,
        title: 'Stapler',
        objectType: 'Tool',
        completed: false,
        location: '',
        quantity: '',
        quantityType: 'Boolean'
      },
      {
        id: 13,
        title: 'Bubble Wrap',
        objectType: 'Product',
        completed: false,
        location: '',
        quantity: '',
        quantityType: 'Boolean'
      },
      {
        id: 14,
        title: 'Tape Machine',
        objectType: 'Tool',
        completed: false,
        location: '',
        quantity: '',
        quantityType: 'Boolean'
      },
      {
        id: 15,
        title: 'FedEx Envelope Bin',
        objectType: 'Product',
        completed: false,
        location: '',
        quantity: '',
        quantityType: 'Integer'
      },
      {
        id: 16,
        title: 'UPS Envelope Bin',
        objectType: 'Product',
        completed: false,
        location: '',
        quantity: '',
        quantityType: 'Integer'
      },
      {
        id: 17,
        title: 'Standard Stamp Bin',
        objectType: 'Product',
        completed: false,
        location: '',
        quantity: '',
        quantityType: 'Integer'
      },
      {
        id: 18,
        title: 'Priority Stamp Bin',
        objectType: 'Product',
        completed: false,
        location: '',
        quantity: '',
        quantityType: 'Integer'
      },
      {
        id: 19,
        title: 'International Stamp Bin',
        objectType: 'Product',
        completed: false,
        location: '',
        quantity: '',
        quantityType: 'Integer'
      },
      {
        id: 20,
        title: 'ICC Bin',
        objectType: 'Product',
        completed: false,
        location: '',
        quantity: '',
        quantityType: 'Integer'
      }
    ],
    scores: {
    }
  }

  // Update Item Location
  updateItem = (title, itemProp, newValue) => {
    console.log(itemProp)
    this.setState({ stations: this.state.stations.map(station => {
      if(station.title === title) {
        station[itemProp] = newValue
      }
      return station;
    }) });
  }

  updateScores = (id, violation) => {
    this.setState({ scores: this.state.scores.map(id => {
      if(id === id) {
        id = violation
        console.log(id)
      }
      return id;
    }) });
  }

  // Delete Item
  delItem = (id) => {
    this.setState({ stations: [...this.state.stations.filter(station => station.id !== id)] });
  }

  // Add Comment
  addComment = (scorecommentarray) => {
    // const newComment = {
    //   comment: comment
    // }
    this.setState({ scores: [this.state.scores, scorecommentarray] });
    console.log(this)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div id="choose-audit">
          <ChooseAudit station={this.state.stations}
          updateItem={this.updateItem}
          addQuantity={this.addQuantity}
          updateLocation={this.updateLocation}/>
        </div>
        <div className="container" id="station-audit">
          <Violations />
          <AddComment addComment={this.addComment}/>
        </div>
        <div id="department-audit">
        </div>
        <Confirm />
      </div>
    );
  }
}

export default App;
