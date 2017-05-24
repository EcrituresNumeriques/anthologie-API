import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import {store} from '../../Redux/store'

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
          <div>
            <h1>Anthologie palatine</h1>
            <nav>
              <Link to="/" activeStyle={{ color: 'black' }}>Home</Link>
              <Link to="/entities" activeStyle={{ color: 'black' }}>Entities</Link>
              <Link to="/authors" activeStyle={{ color: 'black' }}>Authors</Link>
              {!store.getState().loggedIn && <Link to="/register" activeStyle={{ color: 'black' }}>Register</Link>}
              {!store.getState().loggedIn && <Link to="/login" activeStyle={{ color: 'black' }}>Login</Link>}
              {store.getState().loggedIn && <Link to="/profile" activeStyle={{ color: 'black' }}>{store.getState().user.displayName}</Link>}
            </nav>
          </div>
      </header>
    );
  }
}
