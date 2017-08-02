import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
// components

export default class newEntityURI extends Component {


  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = function (e) {
    e.preventDefault();
    //get email and password
    let corps = {id_entity:this.refs.entity.value,value:this.refs.uri.value,id_urid_source:this.refs.source.value}
    fetch("/api/v1/entities/"+corps.id_entity+"/uris",
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
        browserHistory.push('/entities/'+corps.id_entity);
        return null;
      });
  }

  componentWillMount(){
    document.title = "Add new entity name | anthologie";
  }


  render() {

    return (
      <main>
        <h1>Add entity URI</h1>
        <form onSubmit={this.handleSubmit} id="languageForm">
          <select ref="entity" defaultValue={this.props.params.id?this.props.params.id:null} disabled={!!this.props.params.id}>
            {store.getState().entities.map((entity)=>(<option key={'EntitySelect'+entity.id_entity} value={entity.id_entity}>[{entity.id_entity}] {entity.title}</option>))}
          </select>
          <input type="text" placeholder="URI" name="uri" ref="uri"/>
          <select ref="source">
            <option value="0">Undefined</option>
            {store.getState().authorities.map((authority)=>(<option key={'uriauthorities'+authority.id_URI_source} value={authority.id_URI_source}>{authority.name}</option>))}
          </select>
          <input type="submit" value="send"/>
        </form>
      </main>
    );
  }
}
