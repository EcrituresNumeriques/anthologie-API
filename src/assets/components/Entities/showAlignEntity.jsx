import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
import _ from 'lodash'

// components

export default class showAlignEntity extends Component {


  constructor(props) {
    super(props);
    let placeholder = {"id_entity":{"id_entity":1},"source":{"id_entity_translation":1},"source_lang":{"id_language":1},"target":{"id_entity_translation":5},"target_lang":{"id_language":2},"id_user":{"id_user":1,"displayName":"Arthur","institution":"UdeM"},"id_align":1,"json":[[[{"t":"First","h":[[1],[]],"pos":"[1][1]","parent":0,"children":1}]],[[{"t":"Second","h":[[],[1]],"pos":"[2][1]","parent":1,"children":1}]]],"createdAt":"2017-05-31T06:50:14.000Z","updatedAt":"2017-05-31T06:50:14.000Z"}
    this.entity = _.get(store.getState(),'entitiesLookup['+this.props.params.id+']',placeholder);
    this.fetchAPI();
    this.translations = [];
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
        {this.displayJSON(this.json)}
        </main>
    );
  }
}
