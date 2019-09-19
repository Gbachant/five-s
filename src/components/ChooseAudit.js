import React, { Component } from 'react';

export class ChooseAudit extends Component {

  constructor(props) {
    super(props);
    this.getStationButtons = this.getStationButtons.bind(this);

    this.state = {
      departments: [
        {
          title: 'Receiving',
          stations: ['R1'],
          stationItems: ['label printer', 'red tape']
        },
        {
          title: 'Order Verification',
          stations: ['OV1', 'OV2'],
          stationItems: ['label printer', 'red tape']
        },
        {
          title: 'Product Verification',
          stations: ['PV1', 'PV2', 'PV3', 'PV4', 'PV5', 'PV6'],
          stationItems: ['label printer', 'red tape']
        },
        {
          title: 'Shipping',
          stations: ['S1', 'S2', 'S3', 'S4'],
          stationItems: ['label printer', 'red tape']
        }
      ],
      auditDepartments: [
        'Receiving and Order Verification',
        'Product Verification and Shipping'
      ]
     };

 }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.state);
    // this.setState({title: ''})
  }

  getStationButtons() {
    return(
      this.state.departments.map((station, index) => (
        <div key={index}>
          <h3>{station.title}</h3>
          {station.stations.map((c, i) => (
            <div key={i}>
              <button>{c}</button>
            </div>
          ))}
        </div>
      ))
    )
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1>Station Audit</h1>
            {this.getStationButtons()}
          </div>
          <div className="col">
            <h1>Department Audit</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default ChooseAudit
