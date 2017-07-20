import 'styles/app.scss';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';

import {store} from './Redux/store';
import {routes} from './components/App/routes'


function renderApp(){
  render(
  <Provider store={store}>
    <div id="pageMeta">
      <Router history={browserHistory} routes={routes}>
      </Router>
    </div>
  </Provider>, document.querySelector('#app'));
}

let resolveFirst = [];
//check if user is already loggedIn
resolveFirst.push(fetch("/api/v1/status",
{
    method: "GET",
    credentials: 'same-origin'
})
.then(function(res){
  if(!res.ok){throw res.json();}
  return res.json()})
.then(function(data){
  store.dispatch({type:'LOG_ME_IN',payload:data});
  return null})
.catch(()=>(null)));

resolveFirst.push(fetch('/api/v1/Languages',{
  method:'GET',
  credentials: 'same-origin'
})
.then(function(response){
  return response.json();
})
.then(function(json){
  store.dispatch({type:'UPDATE_LANGUAGES',payload:json});
  return null;
}));
resolveFirst.push(fetch('/api/v1/cities',{
  method:'GET',
  credentials: 'same-origin'
})
.then(function(response){
  return response.json();
})
.then(function(json){
  store.dispatch({type:'UPDATE_CITIES',payload:json});
  return null;
}));
resolveFirst.push(fetch('/api/v1/authors',{
  method:'GET',
  credentials: 'same-origin'
})
.then(function(response){
  return response.json();
})
.then(function(json){
  store.dispatch({type:'UPDATE_AUTHORS',payload:json});
  return null;
}));
resolveFirst.push(fetch('/api/v1/entities',{
  method:'GET',
  credentials: 'same-origin'
})
.then(function(response){
  return response.json();
})
.then(function(json){
  store.dispatch({type:'UPDATE_ENTITIES',payload:json});
  return null;
}));
resolveFirst.push(fetch('/api/v1/authorities',{
  method:'GET',
  credentials: 'same-origin'
})
.then(function(response){
  return response.json();
})
.then(function(json){
  store.dispatch({type:'UPDATE_URI_SOURCE',payload:json});
  return null;
}));


Promise.all(resolveFirst).then(renderApp).then(function(){
  store.subscribe(renderApp);
});
//renderApp();
