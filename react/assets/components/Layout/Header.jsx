import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
          <div><strong>Anthologie palatine</strong></div>
          <nav>
            <Link to="/" activeStyle={{ color: 'red' }}>Home</Link>
            <Link to="/entities" activeStyle={{ color: 'red' }}>Entities</Link>
            <Link to="/authors" activeStyle={{ color: 'red' }}>Authors</Link>
          </nav>
      </header>
    );
  }
}
