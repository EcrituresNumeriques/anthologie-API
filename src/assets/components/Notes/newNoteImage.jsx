import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
// components

export default class newNoteImage extends Component {


  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = function (e) {
    e.preventDefault();
    //get email and password
    let corps = {notes:this.refs.note.value,URL:this.refs.URL.value,title:this.refs.title.value,credit:this.refs.credit.value,}
    fetch("/api/v1/images",
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
        browserHistory.push('/notes/'+corps.notes);
        return null;
      });
  }

  componentWillMount(){
    document.title = "Add new image | anthologie";
  }


  render() {

    return (
      <main>
        <h1>Add an image to note</h1>
        <form onSubmit={this.handleSubmit} id="languageForm">
          <select ref="note" defaultValue={this.props.params.id?this.props.params.id:null} disabled={!!this.props.params.id}>
            {store.getState().notes.map((note)=>(<option key={'NoteSelect'+note.id_note} value={note.id_note}>[{note.id_note}] {note.title}</option>))}
          </select>
          <input type="text" ref="URL" placeholder="URL of the image"/>
          <input type="text" ref="title" placeholder="Title of the image"/>
          <textarea ref="credit" placeholder="Credits"></textarea>
          <input type="submit" value="send"/>
        </form>
      </main>
    );
  }
}
