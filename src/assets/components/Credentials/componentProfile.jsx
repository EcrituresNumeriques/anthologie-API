import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {store} from '../../Redux/store'

// components



export default class ComponentProfile extends Component {
  constructor(props) {
    super(props);
    this.user = store.getState().user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount(){
    document.title = "Profile | anthologie";
  }

  handleSubmit = function (e) {
    e.preventDefault();
    let that = this;
    //get email and password
    let corps = {
      displayName:this.refs.username.value,
      first_name:this.refs.firstName.value,
      last_name:this.refs.lastName.value,
      institution:this.refs.institution.value,
      country:this.refs.country.value
    }
    fetch("/api/v1/users/"+this.user.id_user,
    {
        method: "POST",
        body: JSON.stringify(corps),
        credentials: 'same-origin'
    })
    .then(function(res){
      if(!res.ok){throw res.json();}
      return res.json()})
    .then(function(data){
      store.dispatch({type:"LOG_ME_IN",payload:data});
      that.forceUpdate();
      return null})
    .catch(function(error){return error})
    .then(function(error){if(error != null){alert(error.message)};}.bind(this));
  }


  render() {
    if(this.user){
    return (
      <main id="credView">
        <section id="infos">
          <h1>{this.user.displayName}</h1>
          <form onSubmit={this.handleSubmit} id="registerForm">
            <input type="text" placeholder="username*" name="username" ref="username" defaultValue={this.user.displayName}/>
            <input type="text" placeholder="First name" name="firstName" ref="firstName" defaultValue={this.user.first_name}/>
            <input type="text" placeholder="Last name" name="lastName" ref="lastName" defaultValue={this.user.last_name}/>
            <input type="text" placeholder="Institution" name="institution" ref="institution" defaultValue={this.user.institution}/>
            <input type="text" placeholder="Country" name="country" ref="country" defaultValue={this.user.country}/>
            <input type="submit" value="send"/>
          </form>
        </section>
        <section id="password">
          <h1>Change password</h1>
          <form onSubmit={this.handlePassword} id="passwordForm">
            <input type="oldpassword" placeholder="Old password" name="old" ref="old" autoComplete="new-password"/>
            <input type="password" placeholder="New password" name="new" ref="new" autoComplete="new-password"/>
            <input type="passwordConfirm" placeholder="Confirm new password" name="confirm" ref="confirm" autoComplete="new-password"/>
            <input type="submit" value="send"/>
          </form>
        </section>
        <section id="contrib">

        </section>
      </main>
    );
    }
    else{
      return (
        <main id="monoView">
          <h1>You need to be logged in</h1>
        </main>
      )
    }
  }
}
