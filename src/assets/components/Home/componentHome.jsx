import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import {store} from '../../Redux/store'
import _ from 'lodash'



export default class ComponentHome extends Component {
  constructor(props) {
    super(props);
    let placeholder = [{translations:[{name:'loading'}]}];
    this.authors = _.get(store.getState(),'authors',placeholder);
    this.cities = _.get(store.getState(),'cities',placeholder);
    placeholder = [{title:'loading'}];
    this.entities = _.get(store.getState(),'entities',placeholder);
  }

  componentWillMount(){
    document.title = "Home | anthologie";
  }

   search = function(){
     let value = document.querySelector("#selector").value;
     browserHistory.push(value);
   }

   perseus = function(){
     let value = document.querySelector("#perseusURI").value;
     //check if this is a perseus URI
     if(value.startsWith('http://data.perseus.org/citations/'))
     {
       fetch('/api/v1/uris/'+encodeURIComponent(value))
       .then(function(response){
         return response.json();
       })
       .then(function(json){
         if(json.length>0){
           console.log(json);
           browserHistory.push('/entities/'+json[0].id_entity.id_entity);
         }
         else{
           //check if user is logged in
           if(store.getState().user){
             console.log("no URI found, creating new text");
             fetch(value+'/xml')
             .then(function(response){
               return response.text();
             })
             .then(function(response){
               //read XML and create entities + URI + authors
               let parser = new DOMParser();
               let xml = parser.parseFromString(response,"text/xml");

               let title = xml.getElementsByTagName("cts:title")[0].childNodes[0].nodeValue + ' ' + xml.getElementsByTagName("cts:psg")[0].childNodes[0].nodeValue;
               let text = xml.getElementsByTagName("p")[0].textContent;

               //create new entity
               let corps = {title:title}
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

                   let resolveFirst = []
                   //add text
                   let corpsText = {id_entity:data.id_entity,text_translated:text,id_language:8}
                   resolveFirst.push(
                     fetch("/api/v1/entities/"+data.id_entity+"/translations",
                       {
                           method: "POST",
                           body: JSON.stringify(corpsText),
                           credentials: 'same-origin'
                       })
                       .then(function(res){
                         if(!res.ok){throw res.json();}
                         return res.json()
                       })
                   );
                   //add URI
                   let corpsURI = {id_entity:data.id_entity,value:value,id_urid_source:1}
                   resolveFirst.push(
                     fetch("/api/v1/entities/"+data.id_entity+"/uris",
                       {
                           method: "POST",
                           body: JSON.stringify(corpsURI),
                           credentials: 'same-origin'
                       })
                       .then(function(res){
                         if(!res.ok){throw res.json();}
                         return res.json()
                       })
                       .then(function(data){
                         browserHistory.push('/entities/'+corps.id_entity);
                         return null;
                       })
                   )

                   browserHistory.push('/entities/'+data.id_entity);
                   return null;
                 })


               console.log(title,text);
             })
           }
           else{
             alert('this URI was not found on anthologia, You need to be logged in to import it from Perseus');
           }

         }
       });
     }
     else{
        alert('not a valid Perseus URI, must be in the following format : http://data.perseus.org/citations/<URN>');
     }
   }

  render() {
    return (
      <main id="homeView">
        <section id="welcome">
          <h1>Welcome to the Anthologia</h1>
          <p>You can find the source code and contribute on <a href="https://github.com/EcrituresNumeriques/anthologie-API" target="_blank">Github</a>.</p>
          <p>You can also contribute by importing texts from perseus and adding/aligning translations.</p>
        </section>
        <section id="find">
          <h1>Find something on the platform</h1>
          <input list="items" type="text" id="selector"/>
          <button onClick={()=>this.search()}>go</button>
          <datalist id="items">
            {this.authors.map((author,i)=>(<option key={"authorSelect"+author.id_author} value={'/authors/'+author.id_author}>author : {author.translations.map(a => a.name).join(" / ")}</option>))}
            {this.cities.map((city,i)=>(<option key={"citySelect"+city.id_city} value={'/cities/'+city.id_city}>city : {city.translations.map(a => a.name).join(" / ")}</option>))}
            {this.entities.map((entity,i)=>(<option key={"entitiesSelect"+entity.id_entity} value={'/entities/'+entity.id_entity}>entity : {entity.title}</option>))}
          </datalist>
        </section>
        <section id="perseus">
          <h1>Import from perseus</h1>
          <input type="text" id="perseusURI" placeholder="http://data.perseus.org/citations/urn:cts:greekLit:tlg7000.tlg001.perseus-grc1:5.6"/>
          <button onClick={()=>this.perseus()}>go</button>
        </section>
        <section id="readme">
          <Link to="/Home" activeStyle={{ 'backgroundColor': '#f0f0f0' }}>Home</Link>
          <Link to="/entities" activeStyle={{ 'fontWeight': 'bold' }}>Entities</Link>
          <Link to="/authors" activeStyle={{ 'fontWeight': 'bold' }}>Authors</Link>
          <Link to="/cities" activeStyle={{ 'fontWeight': 'bold' }}>Cities</Link>
          <Link to="/languages" activeStyle={{ 'fontWeight': 'bold' }}>Languages</Link>
          <Link to="/keywords" activeStyle={{ 'fontWeight': 'bold' }}>Keywords</Link>
          <Link to="/notes" activeStyle={{ 'fontWeight': 'bold' }}>Notes</Link>
          <h1>Roadmap:</h1>
          <h6>The API backend is not yet dockerized, designing a good deployement process is the next major step</h6>
            <ul>
              <li>Add scholies endpoints access</li>
              <li>Add notes endpoints access</li>
              <li>Add authors to import Perseus</li>
            </ul>
          </section>
      </main>
    );
  }
}
