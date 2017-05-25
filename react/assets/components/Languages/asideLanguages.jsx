import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';

import {store} from '../../Redux/store'
// components

export default class AsideLanguages extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <aside>
        {store.getState().loggedIn && <Link to="/languages/new" className="addto" activeStyle={{ color: 'black' }}>Add new language</Link>}
        <Link to="/languages" activeStyle={{ color: 'black' }}>List all languages</Link>
      </aside>
    );
  }
}
