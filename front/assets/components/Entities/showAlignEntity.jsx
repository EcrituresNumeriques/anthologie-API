import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
import _ from 'lodash'

// components

export default class showAlignEntity extends Component {


  constructor(props) {
    super(props);
    this.API = {json:[]};
    this.fetchAPI();
    this.versions = [];
    this.highlight.bind(this);
    this.resetHighlight.bind(this);
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
        that.API = json;
        //that.refs.city_born = json.city_born;
        that.forceUpdate();
        return null;
      });
  }

  editAlign(){
    browserHistory.push('/entities/'+this.props.params.id+"/editAlign/"+this.props.params.align);
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
      <div className="text" key={"text"+k}>
        {trans.map((line,j)=>(
        <p key={"line"+k+"-"+j}>{line.map((mot,i)=>(
          <span key={"mot"+k+"-"+j+"-"+i}>
            {(mot.t)?
              <span onMouseOver={(e)=>(this.highlight(mot))} onMouseLeave={()=>(this.resetHighlight())} ref={"word"+mot.pos}>{mot.t}</span>:<span>{mot.p}</span>}</span>)
        )}</p>)
      )}</div>)
    );
    //return JSON.stringify(json,false,1);
  }

  render() {
    return (
      <main>
        <h1>Texts Alignement Display</h1>
        <h6>anthologia.ecrituresnumeriques.ca/api/v1/alignements/{this.API.id_align}</h6>
        {this.API.source ? <h6>source : anthologia.ecrituresnumeriques.ca/api/v1/versions/{this.API.source.id_entity_version}</h6> : <h6>source unavailable anymore</h6>}
        {this.API.target ? <h6>target : anthologia.ecrituresnumeriques.ca/api/v1/versions/{this.API.target.id_entity_version}</h6> : <h6>target unavailable anymore</h6>}
        {this.displayJSON(this.API.json)}
        {((this.API.id_user && this.API.id_user.id_user && store.getState().user && this.API.id_user.id_user == store.getState().user.id_user) || (store.getState().user && store.getState().user.admin)) && <button onClick={()=>(this.editAlign())}>Edit</button>}
      </main>
    );
  }
}
