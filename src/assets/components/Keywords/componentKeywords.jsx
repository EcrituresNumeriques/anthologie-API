import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';

// components
import AsideKeywords from 'components/Keywords/asideKeywords';



export default class ComponentKeywords extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    document.title = "Keywords | anthologie";
  }

  render() {

    return (
      <main id="keywordsView">
        <AsideKeywords />
        {this.props.children}
      </main>
    );
  }
}
