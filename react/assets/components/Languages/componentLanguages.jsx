import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';

// components
import AsideLanguages from 'components/Languages/asideLanguages';
import MainLanguages from 'components/Languages/mainLanguages';
import NewLanguage from 'components/Languages/newLanguage'
import SpecificLanguage from 'components/Languages/specificLanguage'



export default class ComponentLanguages extends Component {
  constructor(props) {
    super(props);
  }



  render() {

    return (
      <main id="LanguagesView">
        <AsideLanguages />
        <Router history={browserHistory}>
          <Route path="/languages" component={MainLanguages} />
          <Route path="/languages/new" component={NewLanguage} />
          <Route path="/languages/:id" component={SpecificLanguage} />
        </Router>
      </main>
    );
  }
}
