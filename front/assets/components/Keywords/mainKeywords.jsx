import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import {store} from '../../Redux/store'
import _ from 'lodash'

// components

export default class mainKeywords extends Component {


  constructor(props) {
    super(props);
    let placeholder = [{versions:[{title:'loading'}]}];
    this.keywords = _.get(store.getState(),'keywords',placeholder);
    this.fetchKeywords();
  }

   fetchKeywords(){
     let that = this;
     fetch('/api/v1/keywords')
     .then(function(response){
       return response.json();
     })
     .then(function(json){
       //console.log(json)
       store.dispatch({type:"UPDATE_KEYWORDS",payload:json});
       that.keywords = json;
       that.forceUpdate();
     });
   }


  render() {

    return (
      <main>
        <h1>list of all keywords</h1>
        <h6>anthologia.ecrituresnumeriques.ca/api/v1/keywords</h6>

        {store.getState().loggedIn && <Link to="/keywords/new" className="addto" activeStyle={{ color: 'black' }}>add new keyword</Link>}
        {this.keywords.map((keyword,i)=>(<Link to={"/keywords/"+keyword.id_keyword} key={"keyword"+keyword.id_keyword} id={keyword.id_keyword}>{keyword.title}</Link>))}
        </main>
    );
  }
}
