import 'styles/app.scss';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';

//Components
import App from 'components/App/zApp';
import Header from 'components/Layout/Header';
import Footer from 'components/Layout/Footer';
import ComponentAuthors from 'components/Authors/componentAuthors'
import ComponentEntities from 'components/Entities/componentEntities'
import NotFound from 'components/NotFound/NotFound';

render(
  <div id="page">
    <Router history={browserHistory}>
      <Route path="/*" component={Header} />
    </Router>
    <Router history={browserHistory}>
      <Route path="/entities*" component={ComponentEntities} />
      <Route path="/authors*" component={ComponentAuthors} />
      <Route path="/*" component={NotFound} />
    </Router>
    <Router history={browserHistory}>
      <Route path="/*" component={Footer} />
    </Router>
  </div>, document.querySelector('#app'));
