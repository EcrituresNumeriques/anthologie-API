import React, { Component } from 'react';
import { Link,browserHistory } from 'react-router';
import {store} from '../../Redux/store'

import {displayLang} from 'helpers/displayLang.jsx'
// components



export default class ComponentProfile extends Component {
  constructor(props) {
    super(props);
    this.user = store.getState().user;
    this.contrib = {entities:[{title:'test',id_entity:1}],versions:[],aligns:[],scholies:[],notes:[]};
    this.fetchAPI();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentWillMount(){
    document.title = "Profile | anthologie";
  }

  fetchAPI(){
      let that = this;
      fetch('/api/v1/contrib/entities',{
        method:'GET',
        credentials: 'same-origin'
      })
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        that.contrib.entities = json;
        //that.refs.city_born = json.city_born;
        that.forceUpdate();
        return null;
      });


      fetch('/api/v1/contrib/versions',{
        method:'GET',
        credentials: 'same-origin'
      })
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        that.contrib.versions = json;
        //that.refs.city_born = json.city_born;
        that.forceUpdate();
        return null;
      });


      fetch('/api/v1/contrib/aligns',{
        method:'GET',
        credentials: 'same-origin'
      })
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        that.contrib.aligns = json;
        //that.refs.city_born = json.city_born;
        that.forceUpdate();
        return null;
      });


      fetch('/api/v1/contrib/scholies',{
        method:'GET',
        credentials: 'same-origin'
      })
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        that.contrib.scholies = json;
        //that.refs.city_born = json.city_born;
        that.forceUpdate();
        return null;
      });

      fetch('/api/v1/contrib/notes',{
        method:'GET',
        credentials: 'same-origin'
      })
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        that.contrib.notes = json;
        //that.refs.city_born = json.city_born;
        that.forceUpdate();
        return null;
      });
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
      country:this.refs.country.value,
      defaultEdition:this.refs.defaultEdition.value,
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
      alert('Informations updated!');
      return null})
    .catch(function(error){return error})
    .then(function(error){if(error != null){alert(error.message)};}.bind(this));
  }

  logout = function(e){
      e.preventDefault();
      fetch("/api/v1/logout",
      {
          method: "POST",
          credentials: 'same-origin'
      })
      .then(function(res){
        if(!res.ok){throw res.json();}
        return res.json()})
      .then(function(data){
        store.dispatch({type:'UNLOG_USER'})
        browserHistory.push('/home');
        return null})
  }

  handlePassword = function (e) {
    e.preventDefault();
    let that = this;
    //get email and password
    if(this.refs.new.value != this.refs.confirm.value){
      alert('New password and confirmation must be the same and not be empty');
    }
    else{
      let corps = {
        old:this.refs.old.value,
        new:this.refs.new.value
      }
      fetch("/api/v1/credentials/password",
      {
          method: "POST",
          body: JSON.stringify(corps),
          credentials: 'same-origin'
      })
      .then(function(res){
        if(!res.ok){throw res.json();}
        return res.json()})
      .then(function(data){
        browserHistory.push('/home');
        browserHistory.push('/profile');
        alert("password updated");
        that.forceUpdate();
        return null})
      .catch(function(error){return error})
      .then(function(error){if(error != null){alert(error.humanReadable)};}.bind(this));
    }
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
            <input type="text" placeholder="Default Edition" name="defaultEdition" ref="defaultEdition" defaultValue={this.user.defaultEdition}/>
            <input type="submit" value="send"/>
          </form>
        </section>
        <section id="password">
          <h1>Change password</h1>
          <form onSubmit={this.handlePassword} id="passwordForm">
            <input type="password" placeholder="Old password" name="old" ref="old" autoComplete="new-password"/>
            <input type="password" placeholder="New password" name="new" ref="new" autoComplete="new-password"/>
            <input type="password" placeholder="Confirm new password" name="confirm" ref="confirm" autoComplete="new-password"/>
            <input type="submit" value="send"/>
          </form>
        </section>
        <section id="logout">
          <h1>Log out</h1>
          <form onSubmit={this.logout} id="passwordForm">
            <input type="submit" value="logout"/>
          </form>
        </section>
        <section id="contrib">
          <h1>Contributions</h1>
          <h2>Entities</h2>
          {this.contrib.entities.map((entity,i)=>(<Link key={"contribEntity"+entity.id_entity} to={"/entities/"+entity.id_entity}>{entity.title}</Link>))}
          <h2>Versions</h2>
          {this.contrib.versions.map((version,i)=>(<Link key={"contribVersion"+version.id_entity_version} to={"/entities/"+version.id_entity}>[{displayLang(store.getState().languagesLookup[version.id_language])}] {store.getState().entitiesLookup[version.id_entity].title}</Link>))}
          <h2>Alignements</h2>
          {this.contrib.aligns.map((align,i)=>(<Link key={"contribAlign"+align.id_align} to={"/entities/"+align.id_entity+'/showalign/'+align.id_align}>[{displayLang(store.getState().languagesLookup[align.source_lang])}] => [{displayLang(store.getState().languagesLookup[align.target_lang])}] {store.getState().entitiesLookup[align.id_entity].title}</Link>))}
          <h2>Scholies</h2>
          {this.contrib.scholies.map((scholie,i)=>(<Link key={"contribScholie"+scholie.id_scholie} to={"/entities/"+scholie.id_entity+'/showScholie/'+scholie.id_scholie}>{scholie.title}</Link>))}
          <h2>Notes</h2>
          {this.contrib.notes.map((note,i)=>(<Link key={"contribNote"+note.id_note} to={"/notes/"+note.id_note}>{note.title}</Link>))}
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
