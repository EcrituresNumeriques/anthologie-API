import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';

import {store} from '../../Redux/store'
// components

export default class AsideCities extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <aside>
        {store.getState().loggedIn && <Link to="/cities/new" className="addto" activeStyle={{ color: 'black' }}>Add new city</Link>}
        <Link to="/cities" activeStyle={{ color: 'black' }}>List all cities</Link>
        {store.getState().loggedIn && <Link to="/cities/newtranslation" activeStyle={{ color: 'black' }}>Add a translation name</Link>}

      </aside>
    );
  }
}
