import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import {store} from '../../Redux/store'
import _ from 'lodash'
import Links from 'components/Layout/Links.jsx'
import {perseus} from 'components/App/Functions.jsx'



export default class ComponentHome extends Component {
  constructor(props) {
    super(props);
    let placeholder = [{translations:[{name:'loading'}]}];
    this.authors = _.get(store.getState(),'authors',placeholder);
    this.cities = _.get(store.getState(),'cities',placeholder);
    this.keywords = _.get(store.getState(),'keywords',placeholder);
    placeholder = [{title:'loading'}];
    this.perseus = perseus;
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
        <aside><Links/></aside>
        <main>
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
              {this.keywords.map((keyword,i)=>(<option key={"keywordsSelect"+keyword.id_keyword} value={'/keywords/'+keyword.id_keyword}>keyword : {keyword.translations.map(a => a.title).join(" / ")}</option>))}
            </datalist>
          </section>
          <section id="perseus">
            <h1>Import from perseus</h1>
            <input type="text" id="perseusURI" defaultValue="http://data.perseus.org/citations/urn:cts:greekLit:tlg7000.tlg001.perseus-grc1:5.6"/>
            <button onClick={()=>this.perseus()}>go</button>
          </section>
        </main>
      </main>
    );
  }
}
