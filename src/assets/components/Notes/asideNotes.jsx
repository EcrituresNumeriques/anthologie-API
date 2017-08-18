import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';

import {store} from '../../Redux/store'
// components

export default class AsideNotes extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <aside>
        {store.getState().loggedIn && <Link to="/notes/new" className="addto" activeStyle={{ color: 'black' }}>Add new note</Link>}
        <Link to="/notes" activeStyle={{ color: 'black' }}>List all notes</Link>

      </aside>
    );
  }
}
