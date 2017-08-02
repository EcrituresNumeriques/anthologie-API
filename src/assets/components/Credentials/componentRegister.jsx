import React, { Component } from 'react';
import { browserHistory } from 'react-router';

// components



export default class ComponentRegister extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount(){
    document.title = "Register | anthologie";
  }

  handleSubmit = function (e) {
    e.preventDefault();
    //get email and password
    let corps = {
      email:this.refs.email.value,
      password:this.refs.password.value,
      username:this.refs.username.value,
      first_name:this.refs.firstName.value,
      last_name:this.refs.lastName.value,
      institution:this.refs.institution.value,
      country:this.refs.country.value
    }
    fetch("/api/v1/register",
    {
        method: "POST",
        body: JSON.stringify(corps),
        credentials: 'same-origin'
    })
    .then(function(res){
      if(!res.ok){throw res.json();}
      return res.json()})
    .then(function(data){
      browserHistory.push('/login');
      return null})
    .catch(function(error){return error})
    .then(function(error){if(error != null){alert(error.message)};}.bind(this));
  }


  render() {

    return (
      <main id="monoView">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit} id="registerForm">
          <input type="email" placeholder="email*" name="email" ref="email"/>
          <input type="password" placeholder="password*" name="password" ref="password"/>
          <input type="text" placeholder="username*" name="username" ref="username"/>
          <input type="text" placeholder="First name" name="firstName" ref="firstName"/>
          <input type="text" placeholder="Last name" name="lastName" ref="lastName"/>
          <input type="text" placeholder="Institution" name="institution" ref="institution"/>
          <input type="text" placeholder="Country" name="country" ref="country"/>
          <input type="submit" value="send"/>
        </form>
      </main>
    );
  }
}
