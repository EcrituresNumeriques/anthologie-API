import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import {store} from '../../Redux/store'
import _ from 'lodash'
import Links from 'components/Layout/Links.jsx'
import {perseus} from 'components/App/Functions.jsx'



export default class ComponentHome extends Component {
  constructor(props) {
    super(props);
    let placeholder = [{versions:[{name:'loading'}]}];
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
            <i>Anthologia</i> is a collaborative edition and translation platform for classic texts (mainly Greek and Latin). The core of the project is the collaborative edition and multilingual translation of the Greek Anthology (Codex Palatinus 23).

You can add a text or import it from Perseus, add versions and translations, align them add keywords and other information (scholia, notes, pictures...).

The database is open and queryable via an API.

This project is realized by the <a href="http://digitaltextualities.ca">Canada Research Chair on digital textualities</a> directed by Marcello Vitali-Rosati and it is financed by the SSHRC.

Feel free to collaborate!
<ul>
<li> <a href="http://anthologia-doc.ecrituresnumeriques.ca">More information about the project</a></li>
<li> <a href="http://anthologia-doc.ecrituresnumeriques.ca/fr_FR/#!pages/documentation.md">How to use this platform (documentation and tutorials)</a></li>
<li> <a href="https://github.com/EcrituresNumeriques/anthologie-API">API documentation</a></li>
<li> <a href="http://anthologia-doc.ecrituresnumeriques.ca/fr_FR/#!pages/contacts.md">Contacts</a></li>
</ul>
          </section>
          <section id="find">
            <h1>Find something on the platform</h1>
            <input list="items" type="text" id="selector"/>
            <button onClick={()=>this.search()}>go</button>
            <datalist id="items">
              {this.authors.map((author,i)=>(<option key={"authorSelect"+author.id_author} value={'/authors/'+author.id_author}>author : {author.versions.map(a => a.name).join(" / ")}</option>))}
              {this.cities.map((city,i)=>(<option key={"citySelect"+city.id_city} value={'/cities/'+city.id_city}>city : {city.versions.map(a => a.name).join(" / ")}</option>))}
              {this.entities.map((entity,i)=>(<option key={"entitiesSelect"+entity.id_entity} value={'/entities/'+entity.id_entity}>entity : {entity.title}</option>))}
              {this.keywords.map((keyword,i)=>(<option key={"keywordsSelect"+keyword.id_keyword} value={'/keywords/'+keyword.id_keyword}>keyword : {keyword.versions.map(a => a.title).join(" / ")}</option>))}
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
