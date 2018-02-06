import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
import _ from 'lodash'
import {displayLang} from 'helpers/displayLang.jsx'

// components

export default class specificKeyword extends Component {


  constructor(props) {
    super(props);
    let placeholder = {title:'loading',keywords:[], id_user:1};
    this.state = {keyword: _.get(store.getState(),'keywordCategoryLookup['+this.props.params.id+']',placeholder)};
    this.fetchAPI();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchAPI(){
      let that = this;
      fetch('/api/v1/keyword_categories/'+that.props.params.id,{
        method:'GET',
        credentials: 'same-origin'
      })
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        that.setState({keyword: json});
        return null;
      });
  }

  handleSubmit = function (e) {
    e.preventDefault();
    let that = this;
    //get name and family
    let corps = {title:this.refs.title.value}
    fetch('/api/v1/keyword_categories/'+that.props.params.id,
    {
        method: "POST",
        body: JSON.stringify(corps),
        credentials: 'same-origin'
    })
    .then(function(res){
      if(!res.ok){throw res.json();}
      return res.json()})
    .then(function(data){
        that.setState({keyword: data});
        return null;})
    .catch(function(error){return error})
    .then(function(error){if(error != null){alert(error.message)};}.bind(this));
  }



  render() {
    let update = <p className="legend">You can't update this record.</p>
    let readOnly = true;
    if(store.getState().user && store.getState().user.admin){
      update = <input type="submit" value="Update"/>;
      readOnly = false;
    }
    return (
      <main>
        <h1>{this.state.keyword.title}</h1>
        <h6>anthologia.ecrituresnumeriques.ca/api/v1/keyword_categories/{this.state.keyword.id_keyword_category}</h6>

          <form onSubmit={this.handleSubmit}>
            <div className="inputContainerLanguage"><label>ID keyword : </label><input type="text" value={this.state.keyword.id_keyword_category} disabled="true"/></div>
            <div className="inputContainerLanguage"><label>Title : </label><input type="text" ref="title" defaultValue={this.state.keyword.title} disabled={readOnly}/></div>
            <div className="inputContainerLanguage"><label>created at : </label><input type="text" value={this.state.keyword.createdAt} disabled="true"/></div>
            <div className="inputContainerLanguage"><label>updated at : </label><input type="text" value={this.state.keyword.updatedAt} disabled="true"/></div>
            {this.state.keyword.id_user && <div className="inputContainerLanguage"><label>Owner : </label><input type="text" value={"["+store.getState().usersLookup[this.state.keyword.id_user].institution+"] "+store.getState().usersLookup[this.state.keyword.id_user].displayName} disabled="true"/></div>}
            {update}
          </form>
        </main>
    );
  }
}
