import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
// components

export default class newAuthorTranslation extends Component {


  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = function (e) {
    e.preventDefault();
    //get email and password
    let corps = {id_author:this.refs.author.value,name:this.refs.name.value,id_language:this.refs.language.value}
    fetch("/api/v1/authors/"+corps.id_author+"/translations",
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
        browserHistory.push('/authors/'+corps.id_author);
        return null;
      });
  }

  componentWillMount(){
    document.title = "Add new author name | anthologie";
  }


  render() {

    return (
      <main>
        <h1>Add author name translation</h1>
        <form onSubmit={this.handleSubmit} id="languageForm">
          <select ref="author" defaultValue={this.props.params.id?this.props.params.id:null} disabled={!!this.props.params.id}>
            {store.getState().authors.map((author)=>(<option key={'AuthorSelect'+author.id_author} value={author.id_author}>[{author.id_author}] {author.translations.map((translation,i)=>(translation.name)).join(" / ")}</option>))}
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
