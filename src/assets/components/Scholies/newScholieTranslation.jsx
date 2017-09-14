import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
import {displayLang} from 'helpers/displayLang.jsx'
// components

export default class newScholieTranslation extends Component {


  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = function (e) {
    e.preventDefault();
    //get email and password
    let corps = {id_scholie:this.refs.scholie.value,text:this.refs.text.value,id_language:this.refs.language.value}
    fetch("/api/v1/scholies/"+corps.id_scholie+"/translations",
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
        browserHistory.push('/scholies/'+corps.id_scholie);
        return null;
      });
  }

  componentWillMount(){
    document.title = "Add new scholie name | anthologie";
  }


  render() {

    return (
      <main><div>
        <h1>Add scholie translation</h1>
        <form onSubmit={this.handleSubmit} id="languageForm">
          <select ref="scholie" defaultValue={this.props.params.id?this.props.params.id:null} disabled={!!this.props.params.id}>
            {store.getState().scholiesLookup.map((scholie)=>(<option key={'ScholieSelect'+scholie.id_scholie} value={scholie.id_scholie}>[{scholie.id_scholie}] {scholie.title}</option>))}
          </select>
          <textarea ref="text"></textarea>
          <select ref="language">
            {store.getState().languages.map((lang)=>(<option key={'languageTranslation'+lang.id_language} value={lang.id_language}>{displayLang(lang)}</option>))}
          </select>
          <input type="submit" value="send"/>
        </form>
      </div></main>
    );
  }
}
