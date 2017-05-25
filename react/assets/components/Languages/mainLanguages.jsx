import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';

import {store} from '../../Redux/store'
// components

export default class mainLanguages extends Component {


  constructor(props) {
    super(props);
    this.Languages = [];
    this.fetchLanguages();
  }

   fetchLanguages(){
     let that = this;
     fetch('/api/v1/Languages',{
       method:'GET',
       credentials: 'same-origin'
     })
     .then(function(response){
       return response.json();
     })
     .then(function(json){
       store.dispatch({type:'UPDATE_LANGUAGES',payload:json});
       that.Languages = json;
       that.forceUpdate();
       return null;
     });
   }

    componentWillMount(){
      document.title = "Languages | anthologie";
    }

  render() {

    return (
      <main>
        <h1>list of all Languages</h1>
        {store.getState().loggedIn && <Link to="/languages/new" className="addto" activeStyle={{ color: 'black' }}>add new language</Link>}
        {this.Languages.map((language,i)=>(<Link to={"/languages/"+language.id_language} key={"language"+language.id_language} id={language.id_language}>{'['+ language.family +'] ' + language.name }</Link>))}
        </main>
    );
  }
}
