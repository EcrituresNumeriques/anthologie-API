import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
// components

export default class newEntityExternalRef extends Component {


  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = function (e) {
    e.preventDefault();
    let that = this;
    //get email and password
      let corps = {title:this.refs.title.value, url:this.refs.url.value};
      fetch("/api/v1/entities/"+that.props.params.id+"/externalref",
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
           browserHistory.push('/entities/'+that.props.params.id);
           return null;
         })
  }

  componentWillMount(){
    document.title = "Add new author to entity | anthologie";
  }


  render() {

    return (
      <main>
        <h1>Add an external Reference</h1>
        <form onSubmit={this.handleSubmit} id="languageForm">
          <select ref="entity" defaultValue={this.props.params.id?this.props.params.id:null} disabled={!!this.props.params.id}>
            {store.getState().entities.map((entity)=>(
              <option key={'EntitySelect'+entity.id_entity} value={entity.id_entity}>[{entity.id_entity}] {entity.title}</option>))}
          </select>
          <h3>Define your reference</h3>
          <input className="expanded" type="text" placeholder="Title" name="title" ref="title"/>
          <input className="expanded" type="text" placeholder="https://domain.com/path/to/ressource" name="url" ref="url"/>
          <input type="submit" value="send"/>
        </form>
      </main>
    );
  }
}
