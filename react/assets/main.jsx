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
import ComponentCities from 'components/Cities/componentCities'
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
        <Route path="/cities*" component={ComponentCities} />
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


Promise.all(resolveFirst).then(renderApp).then(function(){
  store.subscribe(renderApp);
});
//renderApp();
