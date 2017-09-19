import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import {store} from '../../Redux/store'
import _ from 'lodash'

// components

export default class mainKeywordCategories extends Component {


  constructor(props) {
    super(props);
    let placeholder = [{title:'loading'}];
    this.keywords = _.get(store.getState(),'keywordCategory',placeholder);
    this.fetchKeywords();
  }

   fetchKeywords(){
     let that = this;
     fetch('/api/v1/keyword_categories')
     .then(function(response){
       return response.json();
     })
     .then(function(json){
       //console.log(json)
       store.dispatch({type:"UPDATE_KEYWORDCAT",payload:json});
       that.keywords = json;
       that.forceUpdate();
     });
   }


  render() {

    return (
      <main>
        <h1>list of all keywords</h1>
        <h6>anthologia.ecrituresnumeriques.ca/api/v1/keywords</h6>

        {store.getState().loggedIn && <Link to="/keywordCategories/new" className="addto" activeStyle={{ color: 'black' }}>add new Category</Link>}
        {this.keywords.map((keyword,i)=>(<Link to={"/keywordCategories/"+keyword.id_keyword_category} key={"keyword"+keyword.id_keyword_category} id={keyword.id_keyword_category}>{keyword.title}</Link>))}
        </main>
    );
  }
}
