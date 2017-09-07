import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
// components

export default class newEntityInternalRef extends Component {


  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = function (e) {
    e.preventDefault();
    let that = this;
    //get email and password
    if(this.refs.refentity.value !== "0"){
        //add association to an existing author
        fetch("/api/v1/entities/"+this.refs.entity.value+"/internalref/"+this.refs.refentity.value,
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
  }

  componentWillMount(){
    document.title = "Add new author to entity | anthologie";
  }


  render() {

    return (
      <main>
        <h1>Internal Reference</h1>
        <form onSubmit={this.handleSubmit} id="languageForm">
          <select ref="entity" defaultValue={this.props.params.id?this.props.params.id:null} disabled={!!this.props.params.id}>
            {store.getState().entities.map((entity)=>(
              <option key={'EntitySelect'+entity.id_entity} value={entity.id_entity}>[{entity.id_entity}] {entity.title}</option>))}
          </select>
          <h3>Select an entity to be referenced</h3>
          <select ref="refentity">
            {store.getState().entities.map((entity)=>(
              <option key={'EntityRefSelect'+entity.id_entity} value={entity.id_entity}>[{entity.id_entity}] {entity.title}</option>))}
          </select>
          <input type="submit" value="send"/>
        </form>
      </main>
    );
  }
}
