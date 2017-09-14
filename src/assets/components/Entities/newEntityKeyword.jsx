import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
import {displayLang} from 'helpers/displayLang.jsx'
// components

export default class newEntityKeyword extends Component {


  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = function (e) {
    e.preventDefault();
    let that = this;
    //get email and password
    if(this.refs.author.value !== "0"){
        //add association to an existing author
        fetch("/api/v1/entities/"+this.refs.entity.value+"/keywords/"+this.refs.author.value,
          {
              method: "POST",
              credentials: 'same-origin'
          })
          .then(function(res){
            if(!res.ok){throw res.json();}
            return res.json()
          })
          .then(function(data){
            browserHistory.push('/entities/'+that.refs.entity.value);
            return null;
          });
    }
    else{

      let corps = {title:this.refs.name.value, id_language:this.refs.language.value};
      fetch("/api/v1/entities/"+this.refs.entity.value+"/keywords",
       {
           method: "POST",
           credentials: 'same-origin'
       })
       .then(function(res){
         if(!res.ok){throw res.json();}
         return res.json()})
       .then(function(data){
         return fetch("/api/v1/keywords/"+data.keywords[data.keywords.length - 1].id_keyword+"/translations",
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
           browserHistory.push('/entities/'+that.refs.entity.value);
           return null;
         })
       })
       .catch(function(error){return error})
       .then(function(error){if(error != null){
         console.log(error.message);
       }return null}.bind(this));
    }

  }

  componentWillMount(){
    document.title = "Add new keyword to entity | anthologie";
  }


  render() {

    return (
      <main>
        <h1>Add keyword</h1>
        <form onSubmit={this.handleSubmit} id="languageForm">
          <select ref="entity" defaultValue={this.props.params.id?this.props.params.id:null} disabled={!!this.props.params.id}>
            {store.getState().entities.map((entity)=>(
              <option key={'EntitySelect'+entity.id_entity} value={entity.id_entity}>[{entity.id_entity}] {entity.title}</option>))}
          </select>
          <h3>Select keyword to be associated</h3>
          <select ref="author">
            <option value="0">Undefined</option>
            {store.getState().keywords.map((keyword)=>(<option key={'keywordSelect'+keyword.id_keyword} value={keyword.id_keyword}>[{keyword.id_keyword}] {keyword.translations.map((translation,i)=>(translation.title)).join(" / ")}</option>))}
          </select>
          <h4> Or create one :</h4>
          <input type="text" placeholder="Name" name="name" ref="name"/>
          <select ref="language">
            {store.getState().languages.map((lang)=>(<option key={'languageTranslation'+lang.id_language} value={lang.id_language}>{displayLang(lang)} </option>))}
          </select>
          <input type="submit" value="send"/>
        </form>
      </main>
    );
  }
}
