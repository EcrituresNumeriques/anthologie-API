import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';



export default class ComponentHome extends Component {
  constructor(props) {
    super(props);
  }



  render() {

    return (
      <main id="monoView">
        <h1>Welcomme to Anthologia</h1>
        <p>You can find the source code and contribute on <a href="https://github.com/EcrituresNumeriques/anthologie-API" target="_blank">Github</a>.</p>
        <p>You can also contribute by importing texts from perseus and adding/aligning translations.</p>
      </main>
    );
  }
}
