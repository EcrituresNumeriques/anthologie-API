import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import {store} from '../../Redux/store'
import _ from 'lodash'

// components

export default class mainCities extends Component {


  constructor(props) {
    super(props);
    let placeholder = [{translations:[{name:'loading'}]}];
    this.cities = _.get(store.getState(),'cities',placeholder);
    this.fetchCities();
  }

   fetchCities(){
     let that = this;
     fetch('/api/v1/cities')
     .then(function(response){
       return response.json();
     })
     .then(function(json){
       //console.log(json)
       store.dispatch({type:"UPDATE_CITIES",payload:json});
       that.cities = json;
       that.forceUpdate();
     });
   }


  render() {

    return (
      <main>
        <h1>list of all cities</h1>
        <h6>anthologia.ecrituresnumeriques.ca/api/v1/cities</h6>
        {store.getState().loggedIn && <Link to="/cities/new" className="addto" activeStyle={{ color: 'black' }}>add new city</Link>}
        {this.cities.map((city,i)=>(<Link to={"/cities/"+city.id_city} key={"city"+city.id_city} id={city.id_city}>{city.translations.map(a => a.name).join(" / ")}</Link>))}
        </main>
    );
  }
}
