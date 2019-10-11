import React from 'react';
import './App.css';
import Aside from './Aside.jsx';
import Greeting from './Greeting.jsx';
import Clock from './Clock.jsx';
import Form from './Form.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Counter from './Counter.jsx';
import Skills from './Skills.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container-wrap">
        <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
        <Router>
          <div>
            <Aside />
            <div id="colorlib-main">
              <Switch>
                <Route exact path="/">
                  <Clock />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/counter">
                  <Counter />
                </Route>
                <Route path="/skills">
                  <Skills />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>

      </div>
    )
  }
}

export default App;
