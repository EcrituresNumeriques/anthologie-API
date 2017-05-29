import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
// components

export default class newEntityTranslation extends Component {


  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = function (e) {
    e.preventDefault();
    //get email and password
    let corps = {id_entity:this.refs.entity.value,name:this.refs.name.value,id_language:this.refs.language.value}
    fetch("/api/v1/entities/"+corps.id_entity+"/translations",
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
        browserHistory.push('/entities/'+corps.id_entity);
        return null;
      });
  }

  componentWillMount(){
    document.title = "Add new entity name | anthologie";
  }


  render() {

    return (
      <main>
        <h1>Add entity name translation</h1>
        <form onSubmit={this.handleSubmit} id="languageForm">
          <select ref="entity" defaultValue={this.props.params.id?this.props.params.id:null} disabled={!!this.props.params.id}>
            {store.getState().entities.map((entity)=>(<option key={'EntitySelect'+entity.id_entity} value={entity.id_entity}>[{entity.id_entity}] {entity.translations.map((translation,i)=>(translation.name)).join(" / ")}</option>))}
          </select>
          <input type="text" placeholder="Name" name="name" ref="name"/>
          <select ref="language">
            {store.getState().languages.map((lang)=>(<option key={'languageTranslation'+lang.id_language} value={lang.id_language}>[{lang.family}] {lang.name}</option>))}
          </select>
          <input type="submit" value="send"/>
        </form>
      </main>
    );
  }
}
