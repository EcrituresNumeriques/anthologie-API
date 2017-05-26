import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import {store} from '../../Redux/store'

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    //check if user is already loggedIn
    fetch("/api/v1/status",
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
    .catch(()=>(null));

    fetch('/api/v1/Languages',{
      method:'GET',
      credentials: 'same-origin'
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      store.dispatch({type:'UPDATE_LANGUAGES',payload:json});
      return null;
    });
  }

  render() {
    return (
      <header>
          <div>
            <h1>Anthologie palatine</h1>
            <nav>
              <Link to="/" activeStyle={{ 'fontWeight': 'bold' }}>Home</Link>
              <Link to="/entities" activeStyle={{ 'fontWeight': 'bold' }}>Entities</Link>
              <Link to="/authors" activeStyle={{ 'fontWeight': 'bold' }}>Authors</Link>
              <Link to="/cities" activeStyle={{ 'fontWeight': 'bold' }}>Cities</Link>
              <Link to="/languages" activeStyle={{ 'fontWeight': 'bold' }}>Languages</Link>
              <div />
              {!store.getState().loggedIn && <Link to="/register" className="user" activeStyle={{ 'fontWeight': 'bold' }}>Register</Link>}
              {!store.getState().loggedIn && <Link to="/login" className="user" activeStyle={{ 'fontWeight': 'bold' }}>Login</Link>}
              {store.getState().loggedIn && <Link to="/profile" className="user" activeStyle={{ 'fontWeight': 'bold' }}>{store.getState().user.displayName}</Link>}
            </nav>
          </div>
      </header>
    );
  }
}
