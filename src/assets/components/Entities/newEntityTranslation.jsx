import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
import {displayLang} from 'helpers/displayLang.jsx'
// components

export default class newEntityTranslation extends Component {


  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = function (e) {
    e.preventDefault();
    //get email and password
    let corps = {id_entity:this.refs.entity.value,text_translated:this.refs.text.value,id_language:this.refs.language.value,edition:this.refs.edition.value}
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
    document.title = "Add new entity translation | anthologie";
  }


  render() {

    return (
      <main>
        <h1>Add entity translation</h1>
        <form onSubmit={this.handleSubmit} id="languageForm">
          <select ref="entity" defaultValue={this.props.params.id?this.props.params.id:null} disabled={!!this.props.params.id}>
            {store.getState().entities.map((entity)=>(<option key={'EntitySelect'+entity.id_entity} value={entity.id_entity}>[{entity.id_entity}] {entity.title}</option>))}
          </select>
          <textarea ref="text"></textarea>
          <select ref="language">
            {store.getState().languages.map((lang)=>(<option key={'languageTranslation'+lang.id_language} value={lang.id_language}>{displayLang(lang)}</option>))}
          </select>
          <input ref="edition" placeholder="Edition of this version" defaultValue={store.getState().user && store.getState().user.defaultEdition?store.getState().user.defaultEdition:''}/>
          <input type="submit" value="send"/>
        </form>
      </main>
    );
  }
}
