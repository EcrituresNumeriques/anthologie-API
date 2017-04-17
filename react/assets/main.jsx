import 'styles/app.scss';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';

//Components
import App from 'components/App/zApp';
import Header from 'components/Layout/Header';
import Footer from 'components/Layout/Footer';
import AsideAuthors from 'components/Authors/asideAuthors';
import MainAuthors from 'components/Authors/mainAuthors';

import NotFound from 'components/NotFound/NotFound';

render(
  <div id="page">
    <Header />
    <Router history={browserHistory}>
      <Route path="/" component={AsideAuthors} />
      <Route path="/*" component={NotFound} />
    </Router>
    <Router history={browserHistory}>
      <Route path="/" component={MainAuthors} />
      <Route path="/*" component={NotFound} />
    </Router>
    <Footer />
  </div>, document.querySelector('body'));
