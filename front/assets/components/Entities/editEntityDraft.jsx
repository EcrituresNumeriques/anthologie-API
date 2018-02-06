import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
import {displayLang} from 'helpers/displayLang.jsx'
// components

export default class editEntityDraft extends Component {


  constructor(props) {
    super(props);
    this.state = {loaded:false,readyToPublish:false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.draft = {};
    this.fetchAPI();
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
    this.newVersion = this.newVersion.bind(this);
  }

  handleSubmit = function (e) {
    e.preventDefault();
    //get email and password
    let that = this;
    let corps = {text_translated:this.refs.text.value,id_language:this.refs.language.value,edition:that.refs.edition.value}
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
  toggleCheckboxChange = function() {
    this.setState({readyToPublish:!this.state.readyToPublish});
  }
  newVersion = function(){
    let that = this;
    //send new version
    let corps = {text_translated:that.refs.text.value,id_language:that.refs.language.value,edition:that.refs.edition.value}
    fetch("/api/v1/entities/"+that.draft.id_entity.id_entity+"/versions",
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
        //delete this draft
        fetch('/api/v1/entities/'+that.draft.id_entity.id_entity+'/drafts/'+that.draft.id_entity_draft,    {
                method: "DELETE",
                credentials: 'same-origin'
            })
            .then(function(data){
              browserHistory.push('/entities/'+that.draft.id_entity.id_entity);
              return null;
            });
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
                {store.getState().languages.map((lang)=>(<option key={'languageVersion'+lang.id_language} value={lang.id_language}>{displayLang(lang)}</option>))}
              </select>
              <input ref="edition" placeholder="Edition of this version" defaultValue={this.draft.edition}/>
          <input type="submit" value="send"/>
        </form>
      }
      {
        this.state.loaded &&
        <div>
          <input type="checkbox" checked={this.state.readyToPublish} onChange={this.toggleCheckboxChange} id="readyToPublish"/>
          <label for="readyToPublish"> I want to publish this draft as a new version of the entity (and delete this draft in the process).</label>
          {this.state.readyToPublish &&
            <button onClick={this.newVersion}>I understand that and want to publish this draft.</button>
          }
        </div>
      }
      </main>
    );
  }
}
