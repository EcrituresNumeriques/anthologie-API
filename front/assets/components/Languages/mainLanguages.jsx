import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';

import {store} from '../../Redux/store'
import _ from 'lodash'
import {displayLang} from 'helpers/displayLang.jsx'
// components

export default class mainLanguages extends Component {


  constructor(props) {
    super(props);
    this.Languages = _.get(store.getState(),'languages',[]);
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
        <h6>anthologia.ecrituresnumeriques.ca/api/v1/languages</h6>
        {store.getState().loggedIn && store.getState().user.admin && <Link to="/languages/new" className="addto" activeStyle={{ color: 'black' }}>add new language</Link>}
        {this.Languages.map((language,i)=>(<Link to={"/languages/"+language.id_language} key={"language"+language.id_language} id={language.id_language}>{displayLang(language)}</Link>))}
        </main>
    );
  }
}
