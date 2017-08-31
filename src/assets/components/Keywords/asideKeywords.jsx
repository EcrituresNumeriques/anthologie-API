import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import Links from 'components/Layout/Links.jsx'

import {store} from '../../Redux/store'
// components

export default class AsideKeywords extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <aside>
        <Links/>
        <section>
          {store.getState().loggedIn && <Link to="/keywords/new" className="addto" activeStyle={{ color: 'black' }}>Add new Keyword</Link>}
          <Link to="/keywords" activeStyle={{ color: 'black' }}>List all keywords</Link>
          {store.getState().loggedIn && <Link to="/keywords/newtranslation" activeStyle={{ color: 'black' }}>Add a translation name</Link>}
        </section>
      </aside>
    );
  }
}
