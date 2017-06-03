import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';



export default class ComponentHome extends Component {
  constructor(props) {
    super(props);
  }



  render() {

    return (
      <main id="homeView">
        <h1>Welcome to the Anthologia</h1>
        <p>You can find the source code and contribute on <a href="https://github.com/EcrituresNumeriques/anthologie-API" target="_blank">Github</a>.</p>
        <p>You can also contribute by importing texts from perseus and adding/aligning translations.</p>
        <h1>anthologie-API</h1>
        <p>API for translating old texts, using :</p>
        <ul>
          <li>docker as service manager</li>
          <li>sails.js as backend API</li>
          <li>react as frontend</li>
        </ul>
        <h1>Roadmap:</h1>
        <h6>The API backend is not yet dockerized, designing a good deployement process is the next major step</h6>
        <h2>Home Page</h2>
        <ul>
          <li>Search box for entities/text/authors/cities with autocompletion</li>
          <li>Shortcut to add a text from perseus directly from it's URI</li>
          <li>Access link to all endpoints of the API (for the less used endpoints)</li>
        </ul>
        <h2>Entity pages</h2>
          <ul>
            <li>Alignement and text translation edition</li>
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
            <li>Add all entities linked to an Author</li>
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
