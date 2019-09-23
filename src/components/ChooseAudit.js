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
          stationItems: [
            'Computer', 'Label Printer', 'Red Tape'
          ]
        },
        {
          title: 'Order Verification',
          stations: ['OV1', 'OV2'],
          stationItems: [
            'Computer', 'Label Printer', 'FLO Kit', 'Calipers', 'Red Tape'
          ]
        },
        {
          title: 'Product Verification',
          stations: ['PV1', 'PV2', 'PV3', 'PV4', 'PV5', 'PV6'],
          stationItems: [
            'Computer', 'Label Printer', 'Abutment Case Bin',
            'Abutment Lid Bin', 'AIG Case Bin', 'AIG Lid Bin', 'Screwdrivers',
            'Plastic Bag Bin'
          ]
        },
        {
          title: 'Shipping',
          stations: ['S1', 'S2', 'S3', 'S4'],
          stationItems: [
            'Computer', 'Printer', 'Label Printer', 'Stapler', 'Bubble Wrap',
            'Tape Machine', 'FedEx Envelope Bin', 'UPS Envelope Bin',
            'Standard Stamp Bin', 'Priority Stamp Bin',
            'International Stamp Bin', 'ICC Bin'
          ]
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
            <button className="btn btn-info">{c}</button>
          ))}
        </div>
      ))
    )
  }

  // selectStation (e) => {
  //
  // }

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
