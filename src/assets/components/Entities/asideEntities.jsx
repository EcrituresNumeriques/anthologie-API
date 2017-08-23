import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import Links from 'components/Layout/Links.jsx'

import {store} from '../../Redux/store'
// components

export default class AsideEntities extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <aside>
        <section id="quickLinks">
          {store.getState().loggedIn && <Link to="/entities/new" className="addto" activeStyle={{ color: 'black' }}>Add new entity</Link>}
          <Link to="/entities" activeStyle={{ color: 'black' }}>List all entities</Link>
        </section>
        <Links />
      </aside>
    );
  }
}
