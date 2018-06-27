import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetcheEvents } from '../actions';
import { Link } from 'react-router-dom';

class EventIndex extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }


  renderEvents() {
    return _.map(this.props.events, event => {
      return (
        <li className="list-group-item" key= {event.id}>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </li>
        );
    });
  }

  render() {
    return (
      <div>
        <h3>Events</h3>
        <ul>
          {this.renderEvents()}
        </ul> 
      </div> 
      );
  }
}

function mapStateToProps(state) {
  return {events: state.events}
}

export default connect(mapStateToProps, {fetchEvents})(EventIndex);



