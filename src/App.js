import React, { Component } from 'react';
import Header from './components/layout/Header.js';
import ChooseAudit from './components/ChooseAudit.js';
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
    activeItems: [],
    scores: {
      sortScore: '',
      setScore: '',
      shineScore: '',
      standardizeScore: '',
      sustainScore: ''
    },
    comment: ''
  }

  // Update Item Location
  updateItem = (title, itemProp, newValue) => {
    this.setState({ stations: this.state.stations.map(station => {
      if(station.title === title) {
        station[itemProp] = newValue
      }
      return station;
    }) });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };


  // Delete Item
  delItem = (id) => {
    this.setState({ stations: [...this.state.stations.filter(station => station.id !== id)] });
  }

  // Update Scores
  updateScores = (value, score) => {
    this.setState({ scores: { ...this.state.scores, [value]: score} });

  }

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  // getActiveItems = (activeItemArray) => {
  //   // this.setState({activeItems: [activeItemArray]})
  //   console.log(activeItemArray)
  //   {console.log(React.Child.count(this.props.children))}
  // }

  // Get Set Score
  getSetScore = (activeItemArray) => {
    function hasLocation(stationItem){
      return stationItem.location
    }
    let grossSetScore

    if (activeItemArray.every(hasLocation)) {
      grossSetScore = 0
      for (let i=0; i < activeItemArray.length; i++) {
        switch (activeItemArray[i].location) {
          case 'Present':
            grossSetScore += 100;
            break;
          case 'Out of Place':
            grossSetScore += 50;
            break;
          }
        }
      }
      if (grossSetScore || grossSetScore === 0) {
        let setScore = grossSetScore / activeItemArray.length
        console.log(setScore)
      }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div id="choose-audit">
          <ChooseAudit station={this.state.stations}
          updateItem={this.updateItem}
          addQuantity={this.addQuantity}
          updateLocation={this.updateLocation}
          getSetScore={this.getSetScore}
          />
        </div>
        <div className="container" id="station-audit">
          <Violations updateScores={this.updateScores}
          onChange={this.onChange}
          />
          <AddComment addComment={this.addComment}
          handleChange={this.handleChange}
          comment={this.state.comment}
          />
        </div>
        <div id="department-audit">
        </div>
        <Confirm
        getSortScore={this.getSortScore}
        />
      </div>
    );
  }
}

export default App;
