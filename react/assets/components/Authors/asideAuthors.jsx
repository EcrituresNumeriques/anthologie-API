import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';

// components

export default class AsideAuthors extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <aside class="whiteBox">actions for authors</aside>
    );
  }
}
