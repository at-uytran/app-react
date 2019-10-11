import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import Form from './Form';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import AlertTemplate from 'react-alert-template-basic'
import {useAlert} from 'react-alert'
import 'react-notifications/lib/notifications.css';

class Greeting extends React.Component {

  constructor(props) {
    const alert = useAlert;
    const numbers = [{id: 1, name: "Name 1"}, {id: 2, name: "Name 2"}];
    super(props);
    this.clicked = this.clicked.bind(this);
    this.resetName = this.resetName.bind(this);
    this.state = {
      name: "Uy",
      listItems: numbers.map((number) =>
        <li key={number.id.toString()}>id: {number.id}, name: {number.name}</li>
      )
    };
    this.defaultName = this.state.name;
    this.warningMsg = this.warningMsg.bind(this);
  }

  render(){
    return (
      <div>
        <h1>Hello {this.state.name}!</h1>
        <button className="btn btn-primary" onClick={this.clicked}>Change name</button>
        <button className="btn btn-success" onClick={this.resetName}>Reset name</button>
        <button className="btn btn-warning" onClick={this.warningMsg}>Notifications</button>
        <Clock/>
        <ul>
          {this.state.listItems}
        </ul>
        <Form/>
        <NotificationContainer/>
      </div>
    );
  }

  clicked() {
    this.setState({ name: "Guest" });
  }

  resetName() {
    this.setState({ name: this.defaultName});
  }

  warningMsg() {
    NotificationManager.warning('Success message', 'Title here');
  }
}

export default Greeting;
