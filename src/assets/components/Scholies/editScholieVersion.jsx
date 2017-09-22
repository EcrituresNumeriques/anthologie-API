import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
import {displayLang} from 'helpers/displayLang.jsx'
// components

export default class editScholieVersion extends Component {


  constructor(props) {
    super(props);
    this.state = {loaded:false,version:{}};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchAPI();
  }

  handleSubmit = function (e) {
    e.preventDefault();
    //get email and password
    let that = this;
    let corps = {text_translated:this.refs.text.value,id_language:this.refs.language.value}
    fetch("/api/v1/scholieVersions/"+this.props.params.scholieversion,
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
        console.log(data);
        browserHistory.push('/scholies/'+data.id_scholie.id_scholie);
        return null;
      });
  }

  fetchAPI(){
      let that = this;
      fetch('/api/v1/scholieVersions/'+that.props.params.scholieversion,{
        method:'GET',
        credentials: 'same-origin'
      })
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        that.setState({loaded:true,version:json});
        return null;
      });
  }

  componentWillMount(){
    document.title = "Edit scholie version | anthologie";
  }


  render() {

    return (
      <main><div>
        <h1>Edit Scholie version</h1>
        {!this.state.loaded && <p>fetching draft</p>}
        {this.state.loaded &&
          <form onSubmit={this.handleSubmit} id="languageForm">
              <textarea ref="text" defaultValue={this.state.version.text}>
              </textarea>
              <select ref="language" defaultValue={this.state.version.id_language}>
                {store.getState().languages.map((lang)=>(<option key={'languageVersion'+lang.id_language} value={lang.id_language}>{displayLang(lang)}</option>))}
              </select>
          <input type="submit" value="send"/>
        </form>
      }
      </div></main>
    );
  }
}
