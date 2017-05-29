import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
import _ from 'lodash'

// components

export default class specificEntity extends Component {


  constructor(props) {
    super(props);
    let placeholder = {"translations": [{"id_entity_translation": 0,"id_entity": 0,"id_user": 0,"id_group": 0,"id_language": 1,"name": "loading",}],"entityities": [],"images": [],  "entities": [],"id_user": {"id_user": 0,"displayName": "Admin","institution": "Anthologie","country": "Canada","createdAt": "2017-05-24T14:18:59.000Z","updatedAt": "2017-05-25T06:30:46.000Z"},"id_entity": 0,"born": null,"born_range": null,"died": null,"died_range": null,"activity": null,"activity_range": null,"createdAt": "2017-05-25T07:38:26.000Z","updatedAt": "2017-05-25T07:38:26.000Z","city_born":{"id_city":1},"city_died":{"id_city":1}};
    this.entity = _.get(store.getState(),'entitiesLookup['+this.props.params.id+']',placeholder);
    this.fetchAPI();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchAPI(){
      let that = this;
      fetch('/api/v1/entities/'+that.props.params.id,{
        method:'GET',
        credentials: 'same-origin'
      })
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        that.entity = json;
        //that.refs.city_born = json.city_born;
        that.forceUpdate();
        return null;
      });
  }

  handleSubmit = function (e) {
    e.preventDefault();
    let that = this;
    //get name and family
    let corps = {city_born:this.refs.city_born.value,city_died:this.refs.city_died.value, born:this.refs.born.value,born_range:this.refs.born_range.value, died:this.refs.died.value,died_range:this.refs.died_range.value}
    fetch("/api/v1/entities/"+that.props.params.id,
    {
        method: "POST",
        body: JSON.stringify(corps),
        credentials: 'same-origin'
    })
    .then(function(res){
      if(!res.ok){throw res.json();}
      return res.json()})
    .then(function(data){
      that.entity = data;
      that.forceUpdate();
      return null})
    .catch(function(error){return error})
    .then(function(error){if(error != null){alert(error.message)};}.bind(this));
  }

  deleteName = function(translation){
    //console.log('clicked',this,translation);
    let that = this;
    fetch('/api/v1/entities/'+translation.id_entity+'/translations/'+translation.id_entity_translation,    {
            method: "DELETE",
            credentials: 'same-origin'
        })
        .then(function(data){
          browserHistory.push('/entities');
          browserHistory.push('/entities/'+that.props.params.id);
        });
  }



  render() {
    let update = <p className="legend">You can't update this record.</p>
    let readOnly = true;
    if((this.entity.id_user && store.getState().user && this.entity.id_user.id_user == store.getState().user.id_user) || (store.getState().user && store.getState().user.admin)){
      update = <input type="submit" value="Update"/>;
      readOnly = false;
    }
    return (
      <main>
        <h1>{this.entity.title}</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="inputContainerLanguage">
              <label>ID entity : </label>
              <input type="text" value={this.entity.id_entity} disabled="true"/>
            </div>
            
            <div className="inputContainerLanguage"><label>created at : </label><input type="text" value={this.entity.createdAt} disabled="true"/></div>
            <div className="inputContainerLanguage"><label>updated at : </label><input type="text" value={this.entity.updatedAt} disabled="true"/></div>
            {this.entity.id_user && <div className="inputContainerLanguage"><label>Owner : </label><input type="text" value={'['+this.entity.id_user.institution+'] ' + this.entity.id_user.displayName} disabled="true"/></div>}
            {update}
          </form>
        </main>
    );
  }
}
