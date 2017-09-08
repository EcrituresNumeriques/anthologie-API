import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';

// components


export default class ComponentSoloblock extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    document.title = "Entities | anthologie";
  }

  render() {
    return (
      <main id="soloblockView">
        {this.props.children}
      </main>
    );
  }
}
