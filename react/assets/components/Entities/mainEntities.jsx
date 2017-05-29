import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import {store} from '../../Redux/store'
import _ from 'lodash'

// components

export default class mainEntities extends Component {


  constructor(props) {
    super(props);
    let placeholder = [{translations:[{name:'loading'}]}];
    this.entities = _.get(store.getState(),'entities',placeholder);
    this.fetchEntities();
  }

   fetchEntities(){
     let that = this;
     fetch('/api/v1/entities')
     .then(function(response){
       return response.json();
     })
     .then(function(json){
       //console.log(json)
       store.dispatch({type:"UPDATE_ENTITIES",payload:json});
       that.entities = json;
       that.forceUpdate();
     });
   }


  render() {

    return (
      <main>
        <h1>list of all entities</h1>
        {store.getState().loggedIn && <Link to="/entities/new" className="addto" activeStyle={{ color: 'black' }}>add new entity</Link>}
        {this.entities.map((entity,i)=>(<Link to={"/entities/"+entity.id_entity} key={"entity"+entity.id_entity} id={entity.id_entity}>{entity.title}</Link>))}
        </main>
    );
  }
}
