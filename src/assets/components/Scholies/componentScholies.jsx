import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';

// components
import AsideScholies from 'components/Scholies/asideScholies';


export default class ComponentScholies extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    document.title = "Scholies | anthologie";
  }

  render() {
    return (
      <main id="scholiesView">
        <AsideScholies />
        {this.props.children}
      </main>
    );
  }
}
