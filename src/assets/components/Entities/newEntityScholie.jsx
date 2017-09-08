import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
// components

export default class newEntityScholie extends Component {


  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {loaded:false,scholies:[]};
    this.fetchAPI();
  }

  fetchAPI = function(){
    let that = this;
    fetch('/api/v1/scholies',{
      method:'GET',
      credentials: 'same-origin'
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      that.setState({loaded:true,scholies:json});
      //that.refs.city_born = json.city_born;
      return null;
    });
  }

  handleSubmit = function (e) {
    e.preventDefault();
    let that = this;
    if(this.refs.scholie.value !== "0"){
        //add association to an existing author
        fetch("/api/v1/scholies/"+this.refs.scholie.value+"/entity/"+that.props.params.id,
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
      fetch("/api/v1/scholies",
       {
           method: "POST",
           body: JSON.stringify(corps),
           credentials: 'same-origin'
       })
       .then(function(res){
         if(!res.ok){throw res.json();}
         return res.json()})
       .then(function(data){
         return fetch("/api/v1/scholies/"+data.id_scholie+"/entity/"+that.props.params.id,
           {
               method: "POST",
               credentials: 'same-origin'
           })
           .then(function(res){
             if(!res.ok){throw res.json();}
             return res.json()
           })
           .then(function(data){
             browserHistory.push('/scholies/'+data.id_scholie);
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
    document.title = "Add new scholie to entity | anthologie";
  }


  render() {

    return (
      <main>
        <h1>Add a scholie</h1>
        <form onSubmit={this.handleSubmit} id="languageForm">
          <select ref="entity" defaultValue={this.props.params.id?this.props.params.id:null} disabled={!!this.props.params.id}>
            {store.getState().entities.map((entity)=>(
              <option key={'EntitySelect'+entity.id_entity} value={entity.id_entity}>[{entity.id_entity}] {entity.title}</option>))}
          </select>
          <h3>Select scholie to be associated</h3>
          <select ref="scholie">
            <option value="0">Undefined</option>
            {this.state.scholies.map((scholie)=>(<option key={"scholie"+scholie.id_scholie} value={scholie.id_scholie}>{scholie.title}</option>))}
          </select>
          <h4> Or create one :</h4>
          <input type="text" placeholder="title" name="title" ref="title"/>
          <input type="submit" value="send"/>
        </form>
      </main>
    );
  }
}
