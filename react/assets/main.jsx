import 'styles/app.scss';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';

//Components
import App from 'components/App/zApp';
import Header from 'components/Layout/Header';
import Footer from 'components/Layout/Footer';
import ComponentAuthors from 'components/Authors/componentAuthors'
import ComponentLanguages from 'components/Languages/componentLanguages'
import ComponentEntities from 'components/Entities/componentEntities'
import ComponentLogin from 'components/Credentials/componentLogin'
import ComponentRegister from 'components/Credentials/componentRegister'
import ComponentProfile from 'components/Credentials/componentProfile'
import NotFound from 'components/NotFound/NotFound';
import ErrorCompo from 'components/App/Error';

import {store} from './Redux/store'

function renderApp(){
  render(
  <Provider store={store}>
    <div id="page">
      <Router history={browserHistory}>
        <Route path="/*" component={Header} />
      </Router>
      <Router history={browserHistory}>
        <Route path="/entities*" component={ComponentEntities} />
        <Route path="/authors*" component={ComponentAuthors} />
        <Route path="/languages*" component={ComponentLanguages} />
        <Route path="/register*" component={ComponentRegister} />
        <Route path="/login*" component={ComponentLogin} />
        <Route path="/profile" component={ComponentProfile} />
        <Route path="/*" component={ErrorCompo} />
      </Router>
      <Router history={browserHistory}>
        <Route path="/*" component={Footer} />
      </Router>
    </div>
  </Provider>, document.querySelector('#app'));
}
renderApp();
store.subscribe(renderApp);
