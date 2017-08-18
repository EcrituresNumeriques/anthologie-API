import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
// components

export default class newNoteTranslation extends Component {


  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = function (e) {
    e.preventDefault();
    //get email and password
    let corps = {id_note:this.refs.note.value,text_translated:this.refs.text.value,id_language:this.refs.language.value}
    fetch("/api/v1/notes/"+corps.id_note+"/translations",
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
        browserHistory.push('/notes/'+corps.id_note);
        return null;
      });
  }

  componentWillMount(){
    document.title = "Add new note name | anthologie";
  }


  render() {

    return (
      <main>
        <h1>Add note translation</h1>
        <form onSubmit={this.handleSubmit} id="languageForm">
          <select ref="note" defaultValue={this.props.params.id?this.props.params.id:null} disabled={!!this.props.params.id}>
            {store.getState().notes.map((note)=>(<option key={'NoteSelect'+note.id_note} value={note.id_note}>[{note.id_note}] {note.title}</option>))}
          </select>
          <textarea ref="text"></textarea>
          <select ref="language">
            {store.getState().languages.map((lang)=>(<option key={'languageTranslation'+lang.id_language} value={lang.id_language}>[{lang.family}] {lang.name}</option>))}
          </select>
          <input type="submit" value="send"/>
        </form>
      </main>
    );
  }
}
