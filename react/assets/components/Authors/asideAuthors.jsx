import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';

import {store} from '../../Redux/store'
// components

export default class AsideAuthors extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <aside>
        {store.getState().loggedIn && <Link to="/authors/new" className="addto" activeStyle={{ color: 'black' }}>Add new author</Link>}
        <Link to="/authors" activeStyle={{ color: 'black' }}>List all authors</Link>
      </aside>
    );
  }
}
