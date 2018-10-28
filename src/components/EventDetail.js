import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { eventDetail } from "./../actions/eventListingAction";

class EventDetail extends Component {
  componentDidMount() {
    this.props.eventDetail(this.props.match.params.activityId);
  }
  render() {
    const { EventListingReducer } = this.props;
    var res = EventListingReducer.response;
    console.log(res);
    return (
      <div className="container">
        <div className="card bg-dark text-white">
          <img className="card-img" src={res.imageUrl} alt="Card image" />

          <div className="card-img-overlay" style={{ textAlign: "right" }}>
            <h5 className="card-title">{res.title}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div
              className="card text-white bg-dark mb-3"
              style={{ marginTop: "10px" }}
            >
              <h4>About this Unique Experience</h4>
              <div className="card-body">
                <p className="card-text">{res.description}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div
              className="card text-white bg-dark mb-3"
              style={{ marginTop: "10px" }}
            >
              <h4>Summary</h4>
              <p>{res.ownerSummary}</p>
            </div>
            {/* <iframe
              width="600"
              height="450"
              frameborder="0"
              style={{ border: "0" }}
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY
    &q=Space+Needle,Seattle+WA"
              allowfullscreen
            /> */}
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
  { eventDetail }
)(withRouter(EventDetail));
