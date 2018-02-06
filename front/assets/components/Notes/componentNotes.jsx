import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';

// components
import AsideNotes from 'components/Notes/asideNotes';


export default class ComponentNotes extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    document.title = "Notes | anthologie";
  }

  render() {
    return (
      <main id="notesView">
        <AsideNotes />
        {this.props.children}
      </main>
    );
  }
}
