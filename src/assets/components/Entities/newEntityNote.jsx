import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
// components

export default class newEntityNote extends Component {


  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {loaded:false,notes:[]};
    this.fetchAPI();
  }

  fetchAPI = function(){
    let that = this;
    fetch('/api/v1/notes',{
      method:'GET',
      credentials: 'same-origin'
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      that.setState({loaded:true,notes:json});
      //that.refs.city_born = json.city_born;
      return null;
    });
  }

  handleSubmit = function (e) {
    e.preventDefault();
    let that = this;
    if(this.refs.note.value !== "0"){
        //add association to an existing author
        fetch("/api/v1/notes/"+this.refs.note.value+"/entity/"+that.props.params.id,
          {
              method: "POST",
              credentials: 'same-origin'
          })
          .then(function(res){
            if(!res.ok){throw res.json();}
            return res.json()
          })
          .then(function(data){
            browserHistory.push('/entities/'+that.props.params.id);
            return null;
          });
    }
    else{

      let corps = {title:this.refs.title.value};
      fetch("/api/v1/notes",
       {
           method: "POST",
           body: JSON.stringify(corps),
           credentials: 'same-origin'
       })
       .then(function(res){
         if(!res.ok){throw res.json();}
         return res.json()})
       .then(function(data){
         return fetch("/api/v1/notes/"+data.id_note+"/entity/"+that.props.params.id,
           {
               method: "POST",
               credentials: 'same-origin'
           })
           .then(function(res){
             if(!res.ok){throw res.json();}
             return res.json()
           })
           .then(function(data){
             browserHistory.push('/notes/'+data.id_note);
             return null;
           })
       })
       .catch(function(error){return error})
       .then(function(error){if(error != null){
         console.log(error.message);
       }return null}.bind(this));
    }

  }

  componentWillMount(){
    document.title = "Add new note to entity | anthologie";
  }


  render() {

    return (
      <main>
        <h1>Add a note</h1>
        <form onSubmit={this.handleSubmit} id="languageForm">
          <select ref="entity" defaultValue={this.props.params.id?this.props.params.id:null} disabled={!!this.props.params.id}>
            {store.getState().entities.map((entity)=>(
              <option key={'EntitySelect'+entity.id_entity} value={entity.id_entity}>[{entity.id_entity}] {entity.title}</option>))}
          </select>
          <h3>Select note to be associated</h3>
          <select ref="note">
            <option value="0">Undefined</option>
            {this.state.notes.map((note)=>(<option key={"note"+note.id_note} value={note.id_note}>{note.title}</option>))}
          </select>
          <h4> Or create one :</h4>
          <input type="text" placeholder="title" name="title" ref="title"/>
          <input type="submit" value="send"/>
        </form>
      </main>
    );
  }
}
