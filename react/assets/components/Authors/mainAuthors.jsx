import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';

// components

export default class mainAuthors extends Component {


  constructor(props) {
    super(props);
    this.authors = [{name:'loading'}];
    this.fetchAuthors();
  }

   fetchAuthors(){
     let that = this;
     fetch('/api/v1/authors')
     .then(function(response){
       return response.json();
     })
     .then(function(json){
       that.authors = json;
       that.forceUpdate();
     });
   }


  render() {

    return (
      <main>
        <h1>list of all authors</h1>
        {this.authors.map((author,i)=>(<p key={i} id={author.id_author}>{author.translations[0].name}</p>))}
        </main>
    );
  }
}
