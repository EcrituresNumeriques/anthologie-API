import React, { Component } from 'react';
import Router, { Link, RouteHandler,browserHistory } from 'react-router';
import {store} from '../../Redux/store'
import _ from 'lodash'

// components

export default class mainKeywordCategories extends Component {


  constructor(props) {
    super(props);
    this.fetchKeywords();
  }

   fetchKeywords(){
     let that = this;
     fetch('/api/v1/keyword_categories')
     .then(function(response){
       return response.json();
     })
     .then(function(json){
       store.dispatch({type:"UPDATE_KEYWORDCAT",payload:json});
     });
     fetch('/api/v1/keywords')
     .then(function(response){
       return response.json();
     })
     .then(function(json){
       store.dispatch({type:"UPDATE_KEYWORDS",payload:json});
     });
   }
   componentWillMount(){
     document.title = "keyword Categories | anthologie";
   }

   goToKeyword = function(id){
     browserHistory.push("/keywords/"+id);
     return null;
   }

  render() {
    let placeholder = [{title:'loading'}];
    let listKeywordCat = _.get(store.getState(),'keywordCategory',placeholder);
    let lookupKeywords = _.get(store.getState(),'keywordsLookup',{});
    let unassignedKeywords = _.get(store.getState(),'unassignedKeywords',[]);
    return (
      <main>
        <h1>list of all keywords</h1>
        <h6>anthologia.ecrituresnumeriques.ca/api/v1/keyword_categories</h6>
        {store.getState().loggedIn && store.getState().user.admin && <Link to="/keywordCategories/new" className="addto" activeStyle={{ color: 'black' }}>add new Category</Link>}
        {unassignedKeywords.length > 0 &&
          <section>
            <h1>Unassigned Keywords ({unassignedKeywords.length})</h1>
            <ul>
              {unassignedKeywords.map((keyword)=>(
                <li key={"unassignedKeyword"+keyword} onClick={()=>this.goToKeyword(keyword)}>
                  {lookupKeywords[keyword].versions.map((version)=>(version.title)).join(' / ')}
                </li>
              ))}
            </ul>
          </section>
        }

        {listKeywordCat.map((keywordCat,i)=>(
          <section key={"keyword"+keywordCat.id_keyword_category}>
            <h1>{keywordCat.title} ({keywordCat.keywords?keywordCat.keywords.length:'0'})
              {store.getState().loggedIn && store.getState().user.admin && <Link to={"/keywordCategories/"+keywordCat.id_keyword_category} id={keywordCat.id_keyword_category}>edit</Link>}
            </h1>
            <ul>
              {keywordCat.keywords && keywordCat.keywords.map((keyword)=>(<li key={"assignedKeyword"+keyword.id_keyword} onClick={()=>this.goToKeyword(keyword.id_keyword)}>{lookupKeywords[keyword.id_keyword].versions.map((version)=>(version.title)).join(' / ')}</li>))}
            </ul>

          </section>
        ))}
        </main>
    );
  }
}
