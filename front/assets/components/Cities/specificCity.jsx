import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import _ from 'lodash'
import {store} from '../../Redux/store'
import {displayLang} from 'helpers/displayLang.jsx'
// components

export default class specificCity extends Component {


  constructor(props) {
    super(props);
    let placeholder = {"versions": [{"id_city_version": 0,"id_city": 0,"id_user": 0,"id_group": 0,"id_language": 1,"name": "loading",}],"cityities": [],"images": [],  "entities": [],"id_user": {"id_user": 0,"displayName": "Admin","institution": "Anthologie","country": "Canada","createdAt": "2017-05-24T14:18:59.000Z","updatedAt": "2017-05-25T06:30:46.000Z"},"id_city": 0,"GPS":null,"createdAt": "2017-05-25T07:38:26.000Z","updatedAt": "2017-05-25T07:38:26.000Z"};
    this.city = _.get(store.getState(),'citiesLookup['+this.props.params.id+']',placeholder)
    this.fetchAPI();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteCity = this.deleteCity.bind(this);
  }

  fetchAPI(){
      let that = this;
      fetch('/api/v1/cities/'+that.props.params.id,{
        method:'GET',
        credentials: 'same-origin'
      })
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        that.city = json;
        that.refs.gps.value = json.GPS;
        that.forceUpdate();
        return null;
      });
  }

  handleSubmit = function (e) {
    e.preventDefault();
    let that = this;
    //get name and family
    let corps = {GPS:this.refs.gps.value}
    fetch("/api/v1/cities/"+that.props.params.id,
    {
        method: "POST",
        body: JSON.stringify(corps),
        credentials: 'same-origin'
    })
    .then(function(res){
      if(!res.ok){throw res.json();}
      return res.json()})
    .then(function(data){
      that.city = data;
      //console.log(that.refs.gps);
      that.refs.gps.value = data.GPS;
      that.forceUpdate();
      return null})
    .catch(function(error){return error})
    .then(function(error){if(error != null){alert(error.message)};}.bind(this));
  }

  deleteName = function(version){
    //console.log('clicked',this,version);
    let that = this;
    fetch('/api/v1/cities/'+version.id_city+'/versions/'+version.id_city_version,    {
            method: "DELETE",
            credentials: 'same-origin'
        })
        .then(function(data){
          browserHistory.push('/cities');
          browserHistory.push('/cities/'+that.props.params.id);
        });
  }

  deleteCity = function(e){
    e.preventDefault();
    let that = this;
    if(this.refs.confirmDelete.value == "DELETE"){
      fetch('/api/v1/cities/'+that.props.params.id,{
        method:'DELETE',
        credentials: 'same-origin'
      })
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        browserHistory.push('/cities');
        //that.refs.city_born = json.city_born;
        return null;
      });
    }
    else{
      alert('Type "DELETE" if you want to delete this city');
    }
  }


  render() {
    let update = <p className="legend">You can't update this record.</p>
    let readOnly = true;
    if((this.city.id_user && store.getState().user && this.city.id_user.id_user == store.getState().user.id_user) || (store.getState().user && store.getState().user.admin)){
      update = <input type="submit" value="Update"/>;
      readOnly = false;
    }
    return (
      <main>
        <h1>{this.city.versions.map(a => a.name).join(" / ")}</h1>
        <h6>anthologia.ecrituresnumeriques.ca/api/v1/cities/{this.city.id_city}</h6>

          <form onSubmit={this.handleSubmit}>
            <div className="inputContainerLanguage"><label>ID city : </label><input type="text" value={this.city.id_city} disabled="true"/></div>
            <div className="inputContainerLanguage"><label>GPS : </label><input placeholder="ex : 45.4991117,-73.6181167" type="text" ref="gps" defaultValue={this.city.GPS} disabled={readOnly} /></div>
            {this.city.versions.map((version,i)=>(<div className="inputContainerLanguage" key={'cityName'+version.id_city_version}><label>{i?'':'names : '}</label><input type="text" value={'['+  displayLang(store.getState().languagesLookup[version.id_language])+'] '+version.name} disabled="true"/>{!readOnly && <button type="button" onClick={()=>this.deleteName(version)} >X</button>}</div>))}
            {!readOnly && <div className="inputContainerLanguage"><Link className="addToCollection" to={'/cities/newVersion/'+this.props.params.id}>Add a name </Link></div>}

            <div className="inputContainerLanguage"><label>created at : </label><input type="text" value={this.city.createdAt} disabled="true"/></div>
            <div className="inputContainerLanguage"><label>updated at : </label><input type="text" value={this.city.updatedAt} disabled="true"/></div>
            {this.city.id_user && <div className="inputContainerLanguage"><label>Owner : </label><input type="text" value={'['+this.city.id_user.institution+'] ' + this.city.id_user.displayName} disabled="true"/></div>}
            {update}
            {store.getState().user && store.getState().user.admin &&
              <div className="alertBlock">
                <p>Deleting this city is an operation that cannot be recovered, are you sure you want to delete it?</p>
                <input placeholder="Write 'DELETE' here to confirm you want to delete this city" ref="confirmDelete"/>
              <button onClick={this.deleteCity}>Delete</button>
            </div>}
          </form>
        </main>
    );
  }
}
