import 'styles/app.scss';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';

import {store} from './Redux/store';
import {routes} from './components/App/routes'
import {resolveFirst} from 'components/App/preload'


function renderApp(){
  render(
  <Provider store={store}>
    <div id="pageMeta">
      <Router history={browserHistory} routes={routes}>
      </Router>
    </div>
  </Provider>, document.querySelector('#app'));
}


Promise.all(resolveFirst).then(renderApp).then(function(){
  store.subscribe(renderApp);
});
//renderApp();
