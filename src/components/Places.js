import React, { Component } from 'react';
import PlaceCard from './PlaceCard';
import '../../styles/style.css';

class Places extends Component {
  render() {
    return (
      <div className="places container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="title">Places to check out...</h2>
          </div>
        </div>
        <div className="main row">
          <div className="offset-md-2 col-md-8">
            <PlaceCard />
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-2">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </div>
          <div className="offset-sm-8 col-sm-2">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Places;
