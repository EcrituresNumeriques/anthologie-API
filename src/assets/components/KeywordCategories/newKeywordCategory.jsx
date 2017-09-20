import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
import {displayLang} from 'helpers/displayLang.jsx'
// components

export default class newKeywordCategory extends Component {


  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = function (e) {
    e.preventDefault();
    //get email and password
    let corps = {title:this.refs.title.value}
    fetch("/api/v1/keyword_categories",
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
        browserHistory.push('/keywordCategories');
        return null;
      })
  }

  componentWillMount(){
    document.title = "Add new keyword Category | anthologie";
  }


  render() {

    return (
      <main>
        <h1>Add a new Keyword Category</h1>
        <form onSubmit={this.handleSubmit} id="languageForm">
          <input type="text" placeholder="Title" name="title" ref="title"/>
          <input type="submit" value="send"/>
        </form>
      </main>
    );
  }
}
