import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
// components

export default class newEntityAuthor extends Component {


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
        fetch("/api/v1/entities/"+this.refs.entity.value+"/authors/"+this.refs.author.value,
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

      let corps = {name:this.refs.name.value, id_language:this.refs.language.value};
      fetch("/api/v1/entities/"+this.refs.entity.value+"/authors",
       {
           method: "POST",
           credentials: 'same-origin'
       })
       .then(function(res){
         if(!res.ok){throw res.json();}
         return res.json()})
       .then(function(data){
         return fetch("/api/v1/authors/"+data.authors[data.authors.length - 1].id_author+"/translations",
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
    document.title = "Add new author to entity | anthologie";
  }


  render() {

    return (
      <main>
        <h1>Add an author</h1>
        <form onSubmit={this.handleSubmit} id="languageForm">
          <select ref="entity" defaultValue={this.props.params.id?this.props.params.id:null} disabled={!!this.props.params.id}>
            {store.getState().entities.map((entity)=>(
              <option key={'EntitySelect'+entity.id_entity} value={entity.id_entity}>[{entity.id_entity}] {entity.title}</option>))}
          </select>
          <h3>Select author to be associated</h3>
          <select ref="author">
            <option value="0">Undefined</option>
            {store.getState().authors.map((author)=>(<option key={'AuthorSelect'+author.id_author} value={author.id_author}>[{author.id_author}] {author.translations.map((translation,i)=>(translation.name)).join(" / ")}</option>))}
          </select>
          <h4> Or create one :</h4>
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
