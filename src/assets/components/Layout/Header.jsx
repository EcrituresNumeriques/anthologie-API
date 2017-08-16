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
            <h1>Anthologia palatina</h1>
            <nav>
              <Link to="/home" activeStyle={{ 'fontWeight': 'bold' }}>Home</Link>
              <Link to="/entities" activeStyle={{ 'fontWeight': 'bold' }}>Entities</Link>
              <Link to="/authors" activeStyle={{ 'fontWeight': 'bold' }}>Authors</Link>
              <Link to="/cities" activeStyle={{ 'fontWeight': 'bold' }}>Cities</Link>
              <Link to="/languages" activeStyle={{ 'fontWeight': 'bold' }}>Languages</Link>
              <Link to="/keywords" activeStyle={{ 'fontWeight': 'bold' }}>Keywords</Link>
              <div />
              {!store.getState().loggedIn && <Link to="/register" className="user" activeStyle={{ 'fontWeight': 'bold' }}>Register</Link>}
              {!store.getState().loggedIn && <Link to="/login" className="user" activeStyle={{ 'fontWeight': 'bold' }}>Login</Link>}
              {store.getState().loggedIn && <Link to="/profile" className="user" activeStyle={{ 'fontWeight': 'bold' }}>{store.getState().user.displayName}</Link>}
            </nav>
          </div>
      </header>
    );
  }
}
