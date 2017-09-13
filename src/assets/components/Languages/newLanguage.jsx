import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {languagesList} from 'components/Languages/listLanguages.js';
import {store} from '../../Redux/store'
// components

export default class newLanguage extends Component {


  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = function (e) {
    e.preventDefault();
    //get email and password
    let corps = {name:this.refs.name.value,family:this.refs.family.value}
    fetch("/api/v1/languages",
    {
        method: "POST",
        body: JSON.stringify(corps),
        credentials: 'same-origin'
    })
    .then(function(res){
      if(!res.ok){throw res.json();}
      return res.json()})
    .then(function(data){
      //Not needed : store.dispatch({type:'ADD_LANGUAGE',payload:data});
      browserHistory.push('/languages');
      return null})
    .catch(function(error){return error})
    .then(function(error){if(error != null){
      console.log(error.message);
    }return null}.bind(this));
  }

  componentWillMount(){
    document.title = "Add new language | anthologie";
  }


  render() {

    return (
      <main>
        <h1>Add a new Language</h1>
        <form onSubmit={this.handleSubmit} id="languageForm">
          <input type="text" placeholder="Name" name="name" ref="name"/>
          <select name="family" ref="family">
            {languagesList.map((lang,i)=>(<option key={"language"+i} value={lang.nativeName}>{lang.nativeName}</option>))}
          </select>
          <input type="submit" value="send"/>
        </form>
      </main>
    );
  }
}
