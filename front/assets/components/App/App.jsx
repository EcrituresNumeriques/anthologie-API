import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';

import Header from 'components/Layout/Header';
import Footer from 'components/Layout/Footer';
// components

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="page">
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}
