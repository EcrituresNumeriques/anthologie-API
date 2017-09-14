import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
import {displayLang} from 'helpers/displayLang.jsx'
// components

export default class newKeyword extends Component {


  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = function (e) {
    e.preventDefault();
    //get email and password
    let corps = {title:this.refs.title.value,id_language:this.refs.language.value}
    fetch("/api/v1/keywords",
    {
        method: "POST",
        credentials: 'same-origin'
    })
    .then(function(res){
      if(!res.ok){throw res.json();}
      return res.json()})
    .then(function(data){
      return fetch("/api/v1/keywords/"+data.id_keyword+"/translations",
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
        browserHistory.push('/keywords');
        return null;
      })
    })
    .catch(function(error){return error})
    .then(function(error){if(error != null){
      console.log(error.message);
    }return null}.bind(this));
  }

  componentWillMount(){
    document.title = "Add new keyword | anthologie";
  }


  render() {

    return (
      <main>
        <h1>Add a new Keyword</h1>
        <form onSubmit={this.handleSubmit} id="languageForm">
          <input type="text" placeholder="Title" name="title" ref="title"/>
          <select ref="language">
            {store.getState().languages.map((lang)=>(<option key={'languageTranslation'+lang.id_language} value={lang.id_language}>{displayLang(lang)}</option>))}
          </select>
          <input type="submit" value="send"/>
        </form>
      </main>
    );
  }
}
