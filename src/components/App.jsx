import React, { Component } from "react";
import { connect } from "react-redux";
import { addReminder, deleteReminder, clearReminders } from "../actions";
import moment from "moment";
//import {bindActionCreators} from 'redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  addReminder() {
    console.log("this.props in addReminder", this.props); //addReminder, deleteReminder, clearReminders, reminders{id: 0.7008554936915581, text: "we3de", dueDates: "2021-05-12T12:17"}
    console.log("this.state in addReminder", this.state);

    this.props.addReminder(this.state.text, this.state.dueDate); //passing parametres to addReminder (action)
  }
  deleteReminder(id) {
    console.log("deleting in app", id);
    console.log("this.props", this.props);
    this.props.deleteReminder(id);
  }
  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {reminders.map((reminder) => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div className="list-item">
                <div>{reminder.text}</div>
                <div>
                  <em>{moment(new Date(reminder.dueDates)).fromNow()}</em>
                </div>
              </div>

              <div
                className="list-item delete-button"
                onClick={() => this.deleteReminder(reminder.id)}
              >
                &#x2715;
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
  render() {
    return (
      <div className="App">
        <div className="title">Reminder Pro</div>
        <div className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to..."
              onChange={(event) => this.setState({ text: event.target.value })}
            />
            <input
              className="form-control"
              type="datetime-local"
              onChange={
                (event) => this.setState({ dueDate: event.target.value }) //adding dueDate to state and after that we can pass (type and dueDate) via props
              }
            />
          </div>

          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >
            Add Reminder
          </button>
        </div>
        {this.renderReminders()}
        <div
          className="btn btn-danger"
          onClick={() => this.props.clearReminders()}
        >
          Clear Reminders
        </div>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({addReminder}, dispatch);Turns an object whose values are action creators, into an object with the same keys, but with every action creator wrapped into a dispatch call so they may be invoked directly.
// }
console.log("connect", connect);

function mapStateToProps(state) {
  //=store.getState
  //extracting data
  console.log("state in mapStateToProps", state);
  return {
    reminders: state, //each field in the object will become a prop for component
  };
}
export default connect(mapStateToProps, {
  //incapsulates logic of talking to redux store
  //this is what we see when we call this.props
  addReminder,
  deleteReminder,
  clearReminders,
})(App); //App is wrapeed with a parent component
