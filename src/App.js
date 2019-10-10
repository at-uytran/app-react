import React from 'react';
import './App.css';
import Greeting from './Greeting';
import Clock from './Clock';
import Form from './Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <Router>
          <div>
            <ul>
              <li>
                <Link className="App-link" to="/">Home</Link>
              </li>
              <li>
                <Link className="App-link" to="/clock">Clock</Link>
              </li>
              <li>
                <Link className="App-link" to="/form">Form</Link>
              </li>
            </ul>

            <hr />

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/clock">
                <Clock />
              </Route>
              <Route path="/form">
                <Form />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Greeting name="Uy"></Greeting>
    </div>
  );
}

export default App;
