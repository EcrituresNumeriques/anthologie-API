import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
import _ from 'lodash'
import regexp from 'xregexp/src/index.js'

// components

export default class editAlignTextsEntity extends Component {


  constructor(props) {
    super(props);
    let placeholder = {"texts":[],"scholies":[],"references":[],"notes":[],"motifs":[],"manuscripts":[],"keywords":[],"images":[],"authors":[],"id_user":{"id_user":1,"displayName":"admin","institution":"API"},"id_entity":1,"title":"title","date":null,"date_range":null,"createdAt":"2017-05-29T03:26:39.000Z","updatedAt":"2017-05-29T03:26:39.000Z"};
    this.entity = _.get(store.getState(),'entitiesLookup['+this.props.params.id+']',placeholder);
    this.fetchAPI();
    this.translations = [];
    this.highlight.bind(this);
    this.resetHighlight.bind(this);
    this.hardSelect.bind(this);
    this.submitNewAlign.bind(this);
    this.json = [];
    this.jsonLookup = {};
    this.select = {firstText:null,secondText:false,selected:[],currentHL:[]}
    }

  fetchAPI(){
      let that = this;
      fetch('/api/v1/alignements/'+that.props.params.align,{
        method:'GET',
        credentials: 'same-origin'
      })
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        that.json = json.json;
        that.translation = [];
        that.translations.push(json.source);
        that.translations.push(json.target);
        //that.refs.city_born = json.city_born;
        that.forceUpdate();
        return null;
      });
  }

  highlight(mot){
    //get info from JSON in memory
    let el = this.jsonLookup[mot.pos];
    let i,j;
    for(i=0;i<el.h.length;i++){
      for(j=0;j<el.h[i].length;j++){
        this.refs["word["+Number(i+1)+"]["+el.h[i][j]+"]"].classList.add("highlighted");
      }
    }
    return true;
  }

  resetHighlight(){
    for(let el in this.refs){
      this.refs[el].classList.remove("highlighted");
    }
    return true;
  }

  hardSelect(mot){

    console.log(this.select);
    //get element
    let el = this.jsonLookup[mot.pos];

    //if this word is already selected, remove it
    let isAlreadyInArray = this.select.selected.indexOf(el.pos);
    if (isAlreadyInArray > -1) {
      this.select.selected.splice(isAlreadyInArray, 1);
      //need to remove from currentHL too
      let removeFromCurrentHL = this.select.currentHL[el.parent].indexOf(el.children)
      if(removeFromCurrentHL > -1) {
        this.select.currentHL[el.parent].splice(removeFromCurrentHL, 1);
      }
      this.refs["word"+el.pos].classList.remove("select");
    }
    else{
      //if this is a shortcut to align faster
      if(this.select.firstText === el.parent && this.select.secondText){
        this.resetHardSelect();
      }

      if(this.select.firstText === null){
        this.select.firstText = el.parent;
        this.select.currentHL = [];
        for(let t=0;t<this.translations.length;t++){
          this.select.currentHL.push([]);
        }
      }
      else if(this.select.firstText !== el.parent){
        this.select.secondText = true;
      }
      console.log(this.translations, el.parent);
      //calculate new h value
      this.select.currentHL[el.parent].push(el.children)

      this.select.selected.push(el.pos);

      //Show in the DOM
      this.refs["word"+el.pos].classList.add("select");
    }
    return true;
  }

  resetHardSelect(){
    //Apply h to selected elements and then reset DOM
    for(let i=0;i<this.select.selected.length;i++){
      this.jsonLookup[this.select.selected[i]].h = this.select.currentHL;
      this.refs["word"+this.select.selected[i]].classList.remove("select");
    }

    //reset this.select object
    this.select.selected = [];
    this.select.secondText = false;
    this.select.currentHL = [];
    this.select.firstText = null;
    for(let t=0;t<this.translations.length;t++){
      this.select.currentHL.push([]);
    }

    return true;
  }

  submitNewAlign(){
    this.resetHardSelect();
    let corps = {
      id_entity:this.props.params.id,
      source:this.translations[0].id_entity_translation,
      source_lang:this.translations[0].id_language,
      target:this.translations[1].id_entity_translation,
      target_lang:this.translations[1].id_language,
      json:this.json
    }
    let that = this;
    fetch("/api/v1/alignements",{
      method:'POST',
      body: JSON.stringify(corps),
      credentials: 'same-origin'
    })
    .then(function(data,err){
      if(err)return "error";
      return data.json();
    })
    .then(function(){
      browserHistory.push('/entities/'+that.props.params.id);
    });
    return true;
  }

  displayJSON(json){

    //get reference in case of change needed
    for(let i=0;i<json.length;i++){
      for(let j=0;j<json[i].length;j++){
        for(let k=0;k<json[i][j].length;k++){
          if(json[i][j][k].pos){
            this.jsonLookup[json[i][j][k].pos] = json[i][j][k];
          }
        }
      }
    }

    //return actual HTML
    return json.map((trans,k)=>(
      <div className="text" key={"text"+k}>{trans.map((line,j)=>(
        <p key={"line"+k+"-"+j}>{line.map((mot,i)=>(<span key={"mot"+k+"-"+j+"-"+i}>
          {(mot.t)?<span onMouseOver={(e)=>(this.highlight(mot))} onMouseLeave={()=>(this.resetHighlight())} onClick={()=>(this.hardSelect(mot))} ref={"word"+mot.pos}>{mot.t}</span>:<span>{mot.p}</span>}</span>)
        )}</p>)
      )}</div>)
    );
    //return JSON.stringify(json,false,1);
  }

  render() {
    return (
      <main>
        <h1>Texts Alignement Module</h1>
        {this.displayJSON(this.json)}
        <p onClick={()=>(this.resetHardSelect())}>accept</p>
        <button onClick={()=>(this.submitNewAlign())}>Send</button>
        </main>
    );
  }
}
