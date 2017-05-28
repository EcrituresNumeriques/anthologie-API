import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
import _ from 'lodash'

// components

export default class specificAuthor extends Component {


  constructor(props) {
    super(props);
    let placeholder = {"translations": [{"id_author_translation": 0,"id_author": 0,"id_user": 0,"id_group": 0,"id_language": 1,"name": "loading",}],"authorities": [],"images": [],  "entities": [],"id_user": {"id_user": 0,"displayName": "Admin","institution": "Anthologie","country": "Canada","createdAt": "2017-05-24T14:18:59.000Z","updatedAt": "2017-05-25T06:30:46.000Z"},"id_author": 0,"born": null,"born_range": null,"died": null,"died_range": null,"activity": null,"activity_range": null,"createdAt": "2017-05-25T07:38:26.000Z","updatedAt": "2017-05-25T07:38:26.000Z"};
    this.author = _.get(store.getState(),'authorsLookup['+this.props.params.id+']',placeholder);
    this.fetchAPI();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchAPI(){
      let that = this;
      fetch('/api/v1/authors/'+that.props.params.id,{
        method:'GET',
        credentials: 'same-origin'
      })
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        that.author = json;
        that.forceUpdate();
        return null;
      });
  }

  handleSubmit = function (e) {
    e.preventDefault();
    let that = this;
    //get name and family
    let corps = {name:this.refs.name.value,family:this.refs.family.value}
    fetch("/api/v1/authors/"+that.props.params.id,
    {
        method: "POST",
        body: JSON.stringify(corps),
        credentials: 'same-origin'
    })
    .then(function(res){
      if(!res.ok){throw res.json();}
      return res.json()})
    .then(function(data){
      that.author = data;
      that.forceUpdate();
      return null})
    .catch(function(error){return error})
    .then(function(error){if(error != null){alert(error.message)};}.bind(this));
  }

  deleteName = function(translation){
    //console.log('clicked',this,translation);
    let that = this;
    fetch('/api/v1/authors/'+translation.id_author+'/translations/'+translation.id_author_translation,    {
            method: "DELETE",
            credentials: 'same-origin'
        })
        .then(function(data){
          browserHistory.push('/authors');
          browserHistory.push('/authors/'+that.props.params.id);
        });
  }



  render() {
    let update = <p className="legend">You can't update this record.</p>
    let readOnly = true;
    if((this.author.id_user && store.getState().user && this.author.id_user.id_user == store.getState().user.id_user) || (store.getState().user && store.getState().user.admin)){
      update = <input type="submit" value="Update"/>;
      readOnly = false;
    }
    return (
      <main>
        <h1>{this.author.translations.map(a => a.name).join(" / ")}</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="inputContainerLanguage"><label>ID author : </label><input type="text" value={this.author.id_author} disabled="true"/></div>
            {this.author.translations.map((translation,i)=>(<div className="inputContainerLanguage" key={'authorName'+translation.id_author_translation}><label>{i?'':'names : '}</label><input type="text" value={'['+  store.getState().languagesLookup[translation.id_language].name+'] '+translation.name} disabled="true"/>{!readOnly && <button type="button" onClick={()=>this.deleteName(translation)} >X</button>}</div>))}
            {!readOnly && <div className="inputContainerLanguage"><Link className="addToCollection" to={'/authors/newTranslation/'+this.props.params.id}>Add a name </Link></div>}
            <div className="inputContainerLanguage"><label>created at : </label><input type="text" value={this.author.createdAt} disabled="true"/></div>
            <div className="inputContainerLanguage"><label>updated at : </label><input type="text" value={this.author.updatedAt} disabled="true"/></div>
            {this.author.id_user && <div className="inputContainerLanguage"><label>Owner : </label><input type="text" value={'['+this.author.id_user.institution+'] ' + this.author.id_user.displayName} disabled="true"/></div>}
            {update}
          </form>
        </main>
    );
  }
}
