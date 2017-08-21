import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
// components

export default class newScholieImage extends Component {


  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = function (e) {
    e.preventDefault();
    //get email and password
    let corps = {scholies:this.refs.scholie.value,URL:this.refs.URL.value,title:this.refs.title.value,credit:this.refs.credit.value,}
    fetch("/api/v1/images",
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
        browserHistory.push('/scholies/'+corps.scholies);
        return null;
      });
  }

  componentWillMount(){
    document.title = "Add new image | anthologie";
  }


  render() {

    return (
      <main><div>
        <h1>Add an image to scholie</h1>
        <form onSubmit={this.handleSubmit} id="languageForm">
          <select ref="scholie" defaultValue={this.props.params.id?this.props.params.id:null} disabled={!!this.props.params.id}>
            {store.getState().scholiesLookup.map((scholie)=>(<option key={'ScholieSelect'+scholie.id_scholie} value={scholie.id_scholie}>[{scholie.id_scholie}] {scholie.title}</option>))}
          </select>
          <input type="text" ref="URL" placeholder="URL of the image"/>
          <input type="text" ref="title" placeholder="Title of the image"/>
          <textarea ref="credit" placeholder="Credits"></textarea>
          <input type="submit" value="send"/>
        </form>
      </div></main>
    );
  }
}
