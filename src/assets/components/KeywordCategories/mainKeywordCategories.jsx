import React, { Component } from 'react';
import Router, { Link, RouteHandler,browserHistory } from 'react-router';
import {store} from '../../Redux/store'
import _ from 'lodash'

// components

export default class mainKeywordCategories extends Component {


  constructor(props) {
    super(props);
    this.state = {search:""};
    this.fetchKeywords();
    this.search = this.search.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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

   handleSearch = function(e){
     this.setState({search: e.target.value});
   }

   search = function(keyword,search){
    let match = 1;
    let versions = keyword.versions.map((v)=>(v.title));
    if(search){
      //there is a search, return the correct amount of success
      search = search.split(" ").filter((word)=>(word.length));
      let n = search.map((term)=>(Boolean(versions.map((chain)=>(chain.toLowerCase().includes(term.toLowerCase()))).filter(v=>v).length))).filter(v=>v).length;
      match = Math.round((n / search.length)*100);
    }
    return match;
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
        <input className="search" placeholder="search keyword" value={this.state.search} onChange={this.handleSearch}/>
        {unassignedKeywords.length > 0 &&
          <section>
            <h1>Unassigned Keywords ({unassignedKeywords.length})</h1>
            <ul>
              {unassignedKeywords.map((keyword)=>( this.search(lookupKeywords[keyword],this.state.search) > 0 &&
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
              {keywordCat.keywords && keywordCat.keywords.map((keyword)=>(this.search(lookupKeywords[keyword.id_keyword],this.state.search) > 0 && <li key={"assignedKeyword"+keyword.id_keyword} onClick={()=>this.goToKeyword(keyword.id_keyword)}>{lookupKeywords[keyword.id_keyword].versions.map((version)=>(version.title)).join(' / ')}</li>))}
            </ul>

          </section>
        ))}
        </main>
    );
  }
}
