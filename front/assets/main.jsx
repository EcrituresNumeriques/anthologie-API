import 'styles/app.scss';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';

import {store} from './Redux/store';
import {routes} from './components/App/routes'
import {resolveFirst} from 'components/App/preload.js'


function renderApp(){
  render(
  <Provider store={store}>
    <div id="pageMeta">
      <Router history={browserHistory} routes={routes}>
      </Router>
    </div>
  </Provider>, document.querySelector('#app'));
}

function loadApp(){
  render(
  <div id="appload">
    <ul>
      <h1>Initialize app</h1>
      <li className="waiting status">loading status</li>
      <li className="waiting languages">loading Languages</li>
      <li className="waiting cities">loading cities</li>
      <li className="waiting authors">loading authors</li>
      <li className="waiting entities">loading entities</li>
      <li className="waiting authorities">loading authorities</li>
      <li className="waiting keywords">loading keywords</li>
      <li className="waiting keywordCategories">loading keywords</li>
      <li className="waiting users">loading users</li>
    </ul>
  </div>
  , document.querySelector('#app'));
}

loadApp();
let unsubscribe = store.subscribe(loadApp);
Promise.all(resolveFirst).then(renderApp).then(function(){
  unsubscribe();
  store.subscribe(renderApp);
});
//renderApp();
