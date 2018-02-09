import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import {store} from '../../Redux/store'
import _ from 'lodash'

// components

export default class mainAuthors extends Component {


  constructor(props) {
    super(props);
    let placeholder = [{versions:[{name:'loading'}]}];
    this.authors = _.get(store.getState(),'authors',placeholder);
    this.fetchAuthors();
  }

   fetchAuthors(){
     let that = this;
     fetch('/api/v1/authors')
     .then(function(response){
       return response.json();
     })
     .then(function(json){
       //console.log(json)
       store.dispatch({type:"UPDATE_AUTHORS",payload:json});
       that.authors = json;
       that.forceUpdate();
     });
   }


  render() {

    return (
      <main>
        <h1>list of all authors</h1>
        <h6>anthologia.ecrituresnumeriques.ca/api/v1/authors</h6>

        {store.getState().loggedIn && <Link to="/authors/new" className="addto" activeStyle={{ color: 'black' }}>add new author</Link>}
        {this.authors.map((author,i)=>(<Link to={"/authors/"+author.id_author} key={"author"+author.id_author} id={author.id_author}>{author.title}</Link>))}
        </main>
    );
  }
}
