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
          {store.getState().loggedIn && store.getState().user.admin && <Link to="/keywordCategories/new" className="addto" activeStyle={{ color: 'black' }}>Add new Category</Link>}
          <Link to="/keywordCategories" activeStyle={{ color: 'black' }}>List all keyword categories</Link>
        </section>
      </aside>
    );
  }
}
