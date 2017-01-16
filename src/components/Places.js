import React, { Component } from 'react';
import PlaceCard from './PlaceCard';
import '../../styles/style.css';

class Places extends Component {
  render() {
    return (
      <div className="places container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
        <div className="main row">
          <div className="offset-md-2 col-md-8">
            <PlaceCard />
          </div>
        </div>
        <div className="row">

          <div className="col-md-6">Prev</div>
          <div className="col-md-6">Next</div>
        </div>
      </div>
    );
  }
}

export default Places;
