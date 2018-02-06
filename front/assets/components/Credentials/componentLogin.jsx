import React, { Component } from 'react';
import {store} from '../../Redux/store'
import { browserHistory } from 'react-router';

// components


export default class ComponentLogin extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = function (e) {
    e.preventDefault();
    //get email and password
    let corps = {email:this.refs.email.value,password:this.refs.password.value}
    fetch("/api/v1/login",
    {
        method: "POST",
        body: JSON.stringify(corps),
        credentials: 'same-origin'
    })
    .then(function(res){
      if(!res.ok){throw res.json();}
      return res.json()})
    .then(function(data){
      store.dispatch({type:'LOG_ME_IN',payload:data});
      browserHistory.push('/profile');
      return null})
    .catch(function(error){return error})
    .then(function(error){if(error != null){this.refs.password.value = '';alert(error.humanReadable)};}.bind(this));
  }

  componentWillMount(){
    document.title = "Login | anthologie";
  }

  render() {
    return (
      <main id="monoView">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} id="loginForm">
          <input type="email" placeholder="email" name="email" ref="email"/>
          <input type="password" placeholder="password" name="password" ref="password"/>
          <input type="submit" value="send"/>
        </form>
      </main>
    );
  }
}
