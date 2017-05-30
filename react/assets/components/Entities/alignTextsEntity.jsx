import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
import _ from 'lodash'

// components

export default class alignTextsEntity extends Component {


  constructor(props) {
    super(props);
    let placeholder = {"texts":[],"scholies":[],"references":[],"notes":[],"motifs":[],"manuscripts":[],"keywords":[],"images":[],"authors":[],"id_user":{"id_user":1,"displayName":"admin","institution":"API"},"id_entity":1,"title":"title","date":null,"date_range":null,"createdAt":"2017-05-29T03:26:39.000Z","updatedAt":"2017-05-29T03:26:39.000Z"};
    this.entity = _.get(store.getState(),'entitiesLookup['+this.props.params.id+']',placeholder);
    this.fetchAPI();
    this.first = {}
    this.second = {}
    }

  fetchAPI(){
      let that = this;
      fetch('/api/v1/entities/'+that.props.params.id,{
        method:'GET',
        credentials: 'same-origin'
      })
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        that.entity = json;
        //that.refs.city_born = json.city_born;
        that.forceUpdate();
        return null;
      });
  }

  render() {
    for(let i=0;i<this.entity.translations.length;i++){
      if(this.entity.translations[i].id_entity_translation === Number(this.props.params.first)){
        this.first = this.entity.translations[i];
      }
      if(this.entity.translations[i].id_entity_translation === Number(this.props.params.second)){
        this.second = this.entity.translations[i];
      }
    }

      //start jsonify texts
      //console.log(this.first,this.second);
      _.get(this.second,'text_translated',"").split("\n")
      .map((paragraphe)=>(
        console.log(paragraphe.match(/['᾽sa-zA-Z0-9Ά-ωΑ-ώ]+/g))
      ));



    return (
      <main>
        <h1>Texts Alignement Module</h1>
          <p>{this.first.text_translated.replace(/\r\n/g,<br />)}</p>
          <p>{this.second.text_translated.split('\n').map((item)=>(<p>{item}</p>))}</p>
        </main>
    );
  }
}
