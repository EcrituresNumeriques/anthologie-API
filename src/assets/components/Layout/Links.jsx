import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';



export default class ComponentLinks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <section id="readme">
          <Link to="/Home" activeStyle={{ 'backgroundColor': '#f0f0f0' }}>Home</Link>
          <Link to="/entities" activeStyle={{ 'backgroundColor': '#f0f0f0' }}>Entities</Link>
          <Link to="/authors" activeStyle={{ 'backgroundColor': '#f0f0f0' }}>Authors</Link>
          <Link to="/cities" activeStyle={{ 'backgroundColor': '#f0f0f0' }}>Cities</Link>
          <Link to="/languages" activeStyle={{ 'backgroundColor': '#f0f0f0' }}>Languages</Link>
          <Link to="/keywords" activeStyle={{ 'backgroundColor': '#f0f0f0' }}>Keywords</Link>
          <Link to="/notes" activeStyle={{ 'backgroundColor': '#f0f0f0' }}>Notes</Link>
          <Link to="/scholies" activeStyle={{ 'backgroundColor': '#f0f0f0' }}>Scholies</Link>
        </section>
    );
  }
}
