import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
import {displayLang} from 'helpers/displayLang.jsx'
// components

export default class newEntityKeyword extends Component {


  constructor(props) {
    super(props);
    this.state = {search:""};
    this.search = this.search.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  goToKeyword = function(id){
    let that = this;
    fetch("/api/v1/entities/"+this.refs.entity.value+"/keywords/"+id,
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

  handleSearch = function(e){
    this.setState({search: e.target.value});
    //toggle search className is there is a search
    if(e.target.value.length > 0){
      document.querySelectorAll("section.keywords").forEach(function(el){el.classList.add("search")});
    }
    else{
      document.querySelectorAll("section.keywords").forEach(function(el){el.classList.remove("search")});
    }
  }
  toggleDisplay = function(e){
    //TODO : add react subcomponents
    e.target.parentElement.classList.toggle("closed");
  }

  search = function(keyword,search){
   let match = 1;
   if(search){
     //there is a search, return the correct amount of success
     let versions = keyword.versions.map((v)=>(v.title));
     search = search.split(" ").filter((word)=>(word.length));
     //look into each term in the search, and see if there is a version that contains it, return number of time a term has been matched
     let n = search.map((term)=>(Boolean(versions.map((chain)=>(chain.toLowerCase().includes(term.toLowerCase()))).filter(v=>v).length))).filter(v=>v).length;
     //transforms to percentage
     match = Math.round((n / search.length)*100);
   }
   return match;
  }


  handleSubmit = function (e) {
    e.preventDefault();
    let that = this;
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
         return fetch("/api/v1/keywords/"+data.keywords[data.keywords.length - 1].id_keyword+"/versions",
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
           let idEntity = that.refs.entity.value;
           browserHistory.push('/keywords');
           browserHistory.push('/entities/'+idEntity);
           return null;
         })
       })
       .catch(function(error){return error})
       .then(function(error){if(error != null){
         console.log(error.message);
       }return null});

  }

  componentWillMount(){
    document.title = "Add new keyword to entity | anthologie";
  }


  render() {
    let placeholder = [{title:'loading'}];
    let listKeywordCat = _.get(store.getState(),'keywordCategory',placeholder);
    let lookupKeywords = _.get(store.getState(),'keywordsLookup',{});
    let unassignedKeywords = _.get(store.getState(),'unassignedKeywords',[]);
    return (
      <main>
        <h1>Add keyword</h1>
        <form onSubmit={this.handleSubmit} id="languageForm">
          <select ref="entity" defaultValue={this.props.params.id?this.props.params.id:null} disabled={!!this.props.params.id}>
            {store.getState().entities.map((entity)=>(
              <option key={'EntitySelect'+entity.id_entity} value={entity.id_entity}>[{entity.id_entity}] {entity.title}</option>))}
          </select>

          <h3>Select keyword to be associated</h3>
          <input className="search" placeholder="search keyword" value={this.state.search} onChange={this.handleSearch}/>
          {unassignedKeywords.length > 0 &&
            <section className="keywords closed">
              <h1 onClick={this.toggleDisplay}>Unassigned Keywords ({unassignedKeywords.length})</h1>
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
            <section key={"keyword"+keywordCat.id_keyword_category} className="keywords closed">
              <h1 onClick={this.toggleDisplay}>{keywordCat.title} ({keywordCat.keywords?keywordCat.keywords.length:'0'})
                {store.getState().loggedIn && store.getState().user.admin && <Link to={"/keywordCategories/"+keywordCat.id_keyword_category} id={keywordCat.id_keyword_category}>edit</Link>}
              </h1>
              <ul>
                {keywordCat.keywords && keywordCat.keywords.map((keyword)=>(this.search(lookupKeywords[keyword.id_keyword],this.state.search) > 0 && <li key={"assignedKeyword"+keyword.id_keyword} onClick={()=>this.goToKeyword(keyword.id_keyword)}>{lookupKeywords[keyword.id_keyword].versions.map((version)=>(version.title)).join(' / ')}</li>))}
              </ul>

            </section>
          ))}

          <h4> Or create one :</h4>
          <input type="text" placeholder="Name" name="name" ref="name"/>
          <select ref="language">
            {store.getState().languages.map((lang)=>(<option key={'languageVersion'+lang.id_language} value={lang.id_language}>{displayLang(lang)} </option>))}
          </select>
          <input type="submit" value="send"/>
        </form>
      </main>
    );
  }
}
