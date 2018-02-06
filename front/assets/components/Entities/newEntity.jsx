import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
import {perseus} from 'components/App/Functions.jsx'
// components

export default class newEntity extends Component {


  constructor(props) {
    super(props);
    this.perseus = perseus;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
    this.state = {NotPerseus:false};
  }

  handleSubmit = function (e) {
    e.preventDefault();
    //get email and password
    let corps = {title:this.refs.title.value}
    fetch("/api/v1/entities/",
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
        browserHistory.push('/entities/'+data.id_entity);
        return null;
      })
      .catch(function(err){
        return err
      })
      .then(function(data){
        console.log(data);
        return null;
      })
  }

  componentWillMount(){
    document.title = "Add new entity | anthologie";
  }
  toggleCheckboxChange = function() {
    this.setState({NotPerseus:!this.state.NotPerseus});
  }


  render() {

    return (
      <main>
        <h1>Add a new entity</h1>
        <div id="fetchPerseus">
          <input type="text" id="perseusURI" defaultValue="http://data.perseus.org/citations/urn:cts:greekLit:tlg7000.tlg001.perseus-grc1:5.6"/>
          <button onClick={()=>this.perseus()}>fetch</button>
        </div>
        <p className="disclaimer"><input type="checkbox" checked={this.state.NotPerseus} onChange={this.toggleCheckboxChange}/>This text is not on Perseus and I still want to add it</p>
        {this.state.NotPerseus && <form id="entityForm">
          <input type="text" placeholder="Title" name="title" ref="title"/>
          <button onClick={this.handleSubmit}>go</button>
        </form>}
      </main>
    );
  }
}
