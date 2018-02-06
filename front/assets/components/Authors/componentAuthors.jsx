import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';

// components
import AsideAuthors from 'components/Authors/asideAuthors';
import MainAuthors from 'components/Authors/mainAuthors';
import newAuthor from 'components/Authors/newAuthor';
import newAuthorVersion from 'components/Authors/newAuthorVersion';
import specificAuthor from 'components/Authors/specificAuthor';



export default class ComponentAuthors extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    document.title = "Authors | anthologie";
  }

  render() {

    return (
      <main id="authorsView">
        <AsideAuthors />
        {this.props.children}
      </main>
    );
  }
}
