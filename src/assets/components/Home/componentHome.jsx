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

  render() {
    return (
      <main id="homeView">
        <section>
          <h1>Find something on the platform</h1>
          <input list="items" type="text" id="selector"/>
          <button onClick={()=>this.search()}>go</button>
          <datalist id="items">
            {this.authors.map((author,i)=>(<option key={"authorSelect"+author.id_author} value={'/authors/'+author.id_author}>author : {author.translations.map(a => a.name).join(" / ")}</option>))}
            {this.cities.map((city,i)=>(<option key={"citySelect"+city.id_city} value={'/cities/'+city.id_city}>city : {city.translations.map(a => a.name).join(" / ")}</option>))}
            {this.entities.map((entity,i)=>(<option key={"entitiesSelect"+entity.id_entity} value={'/entities/'+entity.id_entity}>entity : {entity.title}</option>))}
          </datalist>
        </section>
        <h1>Welcome to the Anthologia</h1>
        <p>You can find the source code and contribute on <a href="https://github.com/EcrituresNumeriques/anthologie-API" target="_blank">Github</a>.</p>
        <p>You can also contribute by importing texts from perseus and adding/aligning translations.</p>
        <h1>anthologie-API</h1>
        <p>API for transcribing/translating old texts, using :</p>
        <ul>
          <li>docker as service manager</li>
          <li><strike>sails.js as backend API</strike></li>
          <li><strike>react as frontend</strike></li>
          <li><strike>Automated backups/restore using myloader/mydumper</strike></li>
        </ul>
        <h1>Roadmap:</h1>
        <h6>The API backend is not yet dockerized, designing a good deployement process is the next major step</h6>
        <h2>Home Page</h2>
        <ul>
          <li><strike>Search box for entities/text/authors/cities with autocompletion</strike></li>
          <li>Shortcut to add a text from perseus directly from it's URI</li>
          <li><strike>Access link to all endpoints of the API (for the less used endpoints)</strike></li>
        </ul>
        <h2>Entity pages</h2>
          <ul>
            <li><strike>Alignement and text translation edition</strike></li>
            <li>Add autocompletion search for entities</li>
            <li>Add keywords endpoints access</li>
            <li>Add images endpoints access</li>
            <li>Add scholies endpoints access</li>
            <li>Add notes endpoints access</li>
          </ul>
          <h2>Author pages</h2>
          <ul>
            <li>Add autocompletion search for authors</li>
            <li><strike>Add activity range</strike></li>
            <li>Add images of authors</li>
            <li><strike>Add all entities linked to an Author</strike></li>
          </ul>
          <h2>Contrib page</h2>
          <ul>
            <li>Design a component for listing all your own contributions (for quick access)</li>
            <li>This shall include entities, translations, alignements and scholies</li>
          </ul>
      </main>
    );
  }
}
