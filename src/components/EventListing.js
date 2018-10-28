import React, { Component } from "react";

import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { eventListing } from "./../actions/eventListingAction";
import _ from "lodash";

class EventListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // lat: 12.926031,
      // lon: 77.676246
      lat: "",
      lon: ""
    };
  }
  componentDidMount() {
    this.getLocation();
  }
  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      window.alert("Geolocation is not supported by this browser.");
    }
  };

  showPosition = position => {
    this.setState({
      lat: position.coords.latitude,
      lon: position.coords.longitude
    });
  };
  onClick = e => {
    e.preventDefault();
    var newData = {
      lat: this.state.lat,

      lon: this.state.lon
    };

    this.props.eventListing(newData);
  };

  render() {
    // console.log(data);
    // const keys = Object.keys(this.props.EventListingReducer);
    // console.log(keys);
    const { EventListingReducer } = this.props;
    var res = EventListingReducer.response;
    var temp;
    for (let key in res) {
      if (key === "results") {
        temp = res[key];
      }
    }

    return (
      <div>
        <button onClick={this.onClick} className="btn btn-dark">
          Show Events
        </button>

        <div className="container">
          <div className="row">
            {_.map(temp, function(data, key) {
              return (
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={data.imageUrl}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">
                        {data.description.substring(0, 50)}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          {data.location.locality}
                        </small>
                      </p>
                      <Link
                        to={`/${data.activityId}`}
                        className="btn btn-primary"
                      >
                        More Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  EventListingReducer: state.EventListingReducer
});

export default connect(
  mapStateToProps,
  { eventListing }
)(withRouter(EventListing));
