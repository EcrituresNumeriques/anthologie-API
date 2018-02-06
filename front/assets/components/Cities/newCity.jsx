import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {displayLang} from 'helpers/displayLang.jsx'
import {store} from '../../Redux/store'
// components

export default class newCity extends Component {


  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = function (e) {
    e.preventDefault();
    //get email and password
    let corps = {name:this.refs.name.value,id_language:this.refs.language.value}
    fetch("/api/v1/cities",
    {
        method: "POST",
        credentials: 'same-origin'
    })
    .then(function(res){
      if(!res.ok){throw res.json();}
      return res.json()})
    .then(function(data){
      return fetch("/api/v1/cities/"+data.id_city+"/versions",
      {
          method: "POST",
          body: JSON.stringify(corps),
          credentials: 'same-origin'
      })
      .then(function(res){
        if(!res.ok){throw res.json();}
        return res.json()
      })
      .then(function(data){
        browserHistory.push('/cities');
        return null;
      })
    })
    .catch(function(error){return error})
    .then(function(error){if(error != null){
      console.log(error.message);
    }return null}.bind(this));
  }

  componentWillMount(){
    document.title = "Add new city | anthologie";
  }


  render() {

    return (
      <main>
        <h1>Add a new city</h1>
        <form onSubmit={this.handleSubmit} id="languageForm">
          <input type="text" placeholder="Name" name="name" ref="name"/>
          <select ref="language">
            {store.getState().languages.map((lang)=>(<option key={'languageVersion'+lang.id_language} value={lang.id_language}>{displayLang(lang)}</option>))}
          </select>
          <input type="submit" value="send"/>
        </form>
      </main>
    );
  }
}
