import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';

import {store} from '../../Redux/store'
// components

export default class AsideScholies extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <aside>
        {store.getState().loggedIn && <Link to="/scholies/new" className="addto" activeStyle={{ color: 'black' }}>Add new scholie</Link>}
        <Link to="/scholies" activeStyle={{ color: 'black' }}>List all scholies</Link>

      </aside>
    );
  }
}
