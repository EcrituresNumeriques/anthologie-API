import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import {store} from '../../Redux/store'

// components

export default class mainAuthors extends Component {


  constructor(props) {
    super(props);
    this.authors = [{translations:[{name:'loading'}]}];
    this.fetchAuthors();
  }

   fetchAuthors(){
     let that = this;
     fetch('/api/v1/authors')
     .then(function(response){
       return response.json();
     })
     .then(function(json){
       console.log(json)
       that.authors = json;
       that.forceUpdate();
     });
   }


  render() {

    return (
      <main>
        <h1>list of all authors</h1>
        {store.getState().loggedIn && <Link to="/authors/new" className="addto" activeStyle={{ color: 'black' }}>add new author</Link>}
        {this.authors.map((author,i)=>(<Link to={"/authors/"+author.id_author} key={"author"+author.id_author} id={author.id_author}>{author.translations.map(a => a.name).join(" / ")}</Link>))}
        </main>
    );
  }
}
