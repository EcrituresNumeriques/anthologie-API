import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import {store} from '../../Redux/store'
import _ from 'lodash'

// components

export default class mainScholies extends Component {


  constructor(props) {
    super(props);
    let placeholder = [{title:"loading",versions:[{name:'loading'}]}];
    this.scholies = _.get(store.getState(),'scholies',placeholder);
    this.fetchScholies();
  }

   fetchScholies(){
     let that = this;
     fetch('/api/v1/scholies')
     .then(function(response){
       return response.json();
     })
     .then(function(json){
       //console.log(json)
       that.scholies = json;
       that.forceUpdate();
     });
   }


  render() {

    return (
      <main>
        <div>
        <h1>list of all scholies</h1>
        <h6>anthologia.ecrituresnumeriques.ca/api/v1/scholies</h6>
        {store.getState().loggedIn && <Link to="/scholies/new" className="addto" activeStyle={{ color: 'black' }}>add new scholie</Link>}
        {this.scholies.map((scholie,i)=>(<Link to={"/scholies/"+scholie.id_scholie} key={"scholie"+scholie.id_scholie} id={scholie.id_scholie}>{scholie.title}</Link>))}
        </div>
        </main>
    );
  }
}
