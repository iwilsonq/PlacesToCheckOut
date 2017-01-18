import React, { Component } from 'react';
import PlaceCard from './PlaceCard';
import '../../styles/style.css';

const baseURL = 'https://place-server.herokuapp.com';

class Places extends Component {
  state = {
    places: []
  };

  componentDidMount() {
    $.get(`${baseURL}/places`, places => {
      this.setState({
        places,
        currentPlace: 0
      }, () => {
        this.updateBackgrounds();
      });
    });
  }

  updateBackgrounds() {
    const { places, currentPlace } = this.state;
    document.querySelector('body').style.backgroundImage = `url('${baseURL}/images/${places[currentPlace].bgImage}.jpg')`
    document.querySelector('.fg-pane').style.backgroundImage = `url('${baseURL}/images/${places[currentPlace].fgImage}.jpg')`
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateBackgrounds();
  }

  handleNext() {
    const { places, currentPlace } = this.state;
    if (currentPlace + 1 < places.length)
      this.setState({ currentPlace: currentPlace + 1});
    else
      this.setState({ currentPlace: 0 });
  }

  handlePrev() {
    const { places, currentPlace } = this.state;
    if (currentPlace - 1 < 0)
      this.setState({ currentPlace: currentPlace + 1 });
    else
      this.setState({ currentPlace: place.length - 1 });
  }

  render() {
    const { places, currentPlace } = this.state;

    return (
      <div className="places container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="title">Places to check out...</h2>
          </div>
        </div>
        <div className="main row">
          <div className="offset-md-2 col-md-8">
            {places.length ? <PlaceCard place={places[currentPlace]}/> : null}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <i onClick={this.handlePrev.bind(this)} className="fa fa-arrow-left" aria-hidden="true"></i>
          </div>
          <div className="offset-sm-8 col-sm-2 right-arrow">
            <i onClick={this.handleNext.bind(this)} className="fa fa-arrow-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Places;
