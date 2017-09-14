import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';

import _ from 'lodash'
import {store} from '../../Redux/store'
import {displayLang} from 'helpers/displayLang.jsx'
// components

export default class specificLanguage extends Component {


  constructor(props) {
    super(props);
    let placeholder = {"id_language": 0,"name": "name","family": "family","createdAt": "2017-05-24T05:55:37.000Z","updatedAt": "2017-05-24T05:55:37.000Z"};
    this.Language = _.get(store.getState(),'languagesLookup['+this.props.params.id+']',placeholder);
    console.log(this.Language);
    this.fetchAPI();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchAPI(){
      let that = this;
      fetch('/api/v1/Languages/'+that.props.params.id,{
        method:'GET',
        credentials: 'same-origin'
      })
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        that.Language = json;
        that.refs.name.value = json.name;
        that.refs.family.value = json.family;
        that.refs.edition.value = json.edition;
        that.forceUpdate();
        return null;
      });
  }

  handleSubmit = function (e) {
    e.preventDefault();
    let that = this;
    //get name and family
    let corps = {name:this.refs.name.value,family:this.refs.family.value,edition:this.refs.edition.value}
    fetch("/api/v1/languages/"+that.props.params.id,
    {
        method: "POST",
        body: JSON.stringify(corps),
        credentials: 'same-origin'
    })
    .then(function(res){
      if(!res.ok){throw res.json();}
      return res.json()})
    .then(function(data){
      that.Language = data;
      that.refs.name.value = data.name;
      that.refs.family.value = data.family;
      that.refs.edition.value = data.edition;
      that.forceUpdate();
      return null})
    .catch(function(error){return error})
    .then(function(error){if(error != null){alert(error.message)};}.bind(this));
  }



  render() {
    let update = <p className="legend">You can't update this record.</p>
    let readOnly = true;
    if((this.Language.id_user && store.getState().user && this.Language.id_user.id_user == store.getState().user.id_user) || (store.getState().user && store.getState().user.admin)){
      update = <input type="submit" value="Update"/>;
      readOnly = false;
    }
    return (
      <main>
        <h1>{displayLang(this.Language)}</h1>
        <h6>anthologia.ecrituresnumeriques.ca/api/v1/languages/{this.Language.id_language}</h6>
          <form onSubmit={this.handleSubmit}>
            <div className="inputContainerLanguage"><label>ID language : </label><input type="text" value={this.Language.id_language} disabled="true"/></div>
            <div className="inputContainerLanguage"><label>family : </label><input type="text" ref="family" defaultValue={this.Language.family} disabled={readOnly} /></div>
            <div className="inputContainerLanguage"><label>Type : </label><input type="text" ref="name" defaultValue={this.Language.name} disabled={readOnly} /></div>
            <div className="inputContainerLanguage"><label>Edition : </label><input type="text" ref="edition" defaultValue={this.Language.edition} disabled={readOnly} /></div>
            <div className="inputContainerLanguage"><label>created at : </label><input type="text" value={this.Language.createdAt} disabled="true"/></div>
            <div className="inputContainerLanguage"><label>updated at : </label><input type="text" value={this.Language.updatedAt} disabled="true"/></div>
            {this.Language.id_user && <div className="inputContainerLanguage"><label>Owner : </label><input type="text" value={'['+this.Language.id_user.institution+'] ' + this.Language.id_user.displayName} disabled="true"/></div>}
            {update}
          </form>
        </main>
    );
  }
}
