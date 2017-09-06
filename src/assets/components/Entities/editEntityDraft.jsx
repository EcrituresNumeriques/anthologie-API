import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
// components

export default class editEntityDraft extends Component {


  constructor(props) {
    super(props);
    this.state = {loaded:false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.draft = {};
    this.fetchAPI();
  }

  handleSubmit = function (e) {
    e.preventDefault();
    //get email and password
    let that = this;
    let corps = {text_translated:this.refs.text.value,id_language:this.refs.language.value}
    fetch("/api/v1/drafts/"+this.props.params.draft,
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
        browserHistory.push('/entities/'+that.draft.id_entity.id_entity);
        return null;
      });
  }

  fetchAPI(){
      let that = this;
      fetch('/api/v1/drafts/'+that.props.params.draft,{
        method:'GET',
        credentials: 'same-origin'
      })
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        that.draft = json;
        that.setState({loaded:true});
        //that.refs.city_born = json.city_born;
        return null;
      });
  }

  componentWillMount(){
    document.title = "Edit entity draft | anthologie";
  }


  render() {

    return (
      <main>
        <h1>Edit entity draft</h1>
        {!this.state.loaded && <p>fetching draft</p>}
        {this.state.loaded &&
          <form onSubmit={this.handleSubmit} id="languageForm">

              <textarea ref="text" defaultValue={this.draft.text_translated}>
              </textarea>
              <select ref="language" defaultValue={this.draft.id_language.id_language}>
                {store.getState().languages.map((lang)=>(<option key={'languageTranslation'+lang.id_language} value={lang.id_language}>[{lang.family}] {lang.name}</option>))}
              </select>
          <input type="submit" value="send"/>
        </form>
      }
      </main>
    );
  }
}
