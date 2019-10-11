import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Aside extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <aside id="colorlib-aside" role="complementary" className="border">
        <div className="text-center">
          <div className="author-img" style={{'backgroundImage': 'url(images/about.jpg)'}}></div>
          <h1 id="colorlib-logo"><a href="index.html">Jackson Ford</a></h1>
          <span className="position"><a href="#">UI/UX/Designer</a> in Philippines</span>
        </div>
        <nav id="colorlib-main-menu" role="navigation" className="navbar">
          <div id="navbar" className="collapse">
            <ul>
              <li className="active">
                <Link className="App-link" to="/">Home</Link>
              </li>
              <li>
                <Link className="App-link" to="/about">About</Link>
              </li>
              <li>
                <Link className="App-link" to="/counter">Counter</Link>
              </li>
              <li>
                <Link className="App-link" to="/skills">Skills</Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    )
  }
}

export default Aside;