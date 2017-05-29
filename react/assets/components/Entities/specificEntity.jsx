import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
import _ from 'lodash'

// components

export default class specificEntity extends Component {


  constructor(props) {
    super(props);
    let placeholder = {"texts":[],"scholies":[],"references":[],"notes":[],"motifs":[],"manuscripts":[],"keywords":[],"images":[],"authors":[],"id_user":{"id_user":1,"displayName":"admin","institution":"API"},"id_entity":1,"title":"title","date":null,"date_range":null,"createdAt":"2017-05-29T03:26:39.000Z","updatedAt":"2017-05-29T03:26:39.000Z"};
    this.entity = _.get(store.getState(),'entitiesLookup['+this.props.params.id+']',placeholder);
    this.fetchAPI();
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit = function (e) {
    e.preventDefault();
    let that = this;
    //get name and family
    let corps = {title:this.refs.title.value}
    fetch("/api/v1/entities/"+that.props.params.id,
    {
        method: "POST",
        body: JSON.stringify(corps),
        credentials: 'same-origin'
    })
    .then(function(res){
      if(!res.ok){throw res.json();}
      return res.json()})
    .then(function(data){
      that.entity = data;
      that.forceUpdate();
      return null})
    .catch(function(error){return error})
    .then(function(error){if(error != null){alert(error.message)};}.bind(this));
  }

  deleteName = function(author){
    //console.log('clicked',this,translation);
    let that = this;
    fetch('/api/v1/entities/'+that.props.params.id+'/authors/'+author.id_author,    {
            method: "DELETE",
            credentials: 'same-origin'
        })
        .then(function(data){
          browserHistory.push('/entities');
          browserHistory.push('/entities/'+that.props.params.id);
        });
  }
  deleteUri = function(uri){
    //console.log('clicked',this,translation);
    let that = this;
    fetch('/api/v1/entities/'+that.props.params.id+'/uris/'+uri.id_urid,    {
            method: "DELETE",
            credentials: 'same-origin'
        })
        .then(function(data){
          browserHistory.push('/entities');
          browserHistory.push('/entities/'+that.props.params.id);
        });
  }
  deleteTranslation = function(translation){
    //console.log('clicked',this,translation);
    let that = this;
    fetch('/api/v1/entities/'+that.props.params.id+'/translations/'+translation.id_entity_translation,    {
            method: "DELETE",
            credentials: 'same-origin'
        })
        .then(function(data){
          browserHistory.push('/entities');
          browserHistory.push('/entities/'+that.props.params.id);
        });
  }

  componentWillMount(){
    document.title = this.entity.title+" | anthologie";
  }


  render() {
    let update = <p className="legend">You can't update this record.</p>
    let readOnly = true;
    console.log(JSON.stringify(this.entity));
    if((this.entity.id_user && store.getState().user && this.entity.id_user.id_user == store.getState().user.id_user) || (store.getState().user && store.getState().user.admin)){
      update = <input type="submit" value="Update"/>;
      readOnly = false;
    }
    return (
      <main>
        <h1>{this.entity.title}</h1>
        <h6>anthologia.ecrituresnumeriques.ca/api/v1/entities/{this.entity.id_entity}</h6>

          <form onSubmit={this.handleSubmit}>
            <div className="inputContainerLanguage">
              <label>ID entity : </label>
              <input type="text" value={this.entity.id_entity} disabled="true"/>
            </div>

            <div className="inputContainerLanguage">
              <label>title : </label>
              <input placeholder="ex. : A.P. 5.1" type="text" ref="title" defaultValue={this.entity.title} disabled={readOnly} />
            </div>

            {_.get(this.entity,'authors',[]).map((author,i)=>(
              <div className="inputContainerLanguage" key={'authorEntity'+author.id_author}>
                <label>{i?'':'Authors : '}</label>
                <input type="text" value={store.getState().authorsLookup[author.id_author].translations.map((translation)=>(translation.name)).join(" / ")} disabled="true"/>
                {!readOnly && <button type="button" onClick={()=>this.deleteName(author)} >X</button>}
              </div>
            ))}

            {!readOnly && <div className="inputContainerLanguage"><Link className="addToCollection" to={'/entities/newAuthor/'+this.props.params.id}>Add an author </Link></div>}

            {_.get(this.entity,'uris',[]).map((uri,i)=>(
              <div className="inputContainerLanguage" key={'uriEntity'+uri.id_urid}>
                <label>{i?'':'URIs : '}</label>
                <input type="text" value={uri.value} disabled="true"/>
                {!readOnly && <button type="button" onClick={()=>this.deleteUri(uri)} >X</button>}
              </div>
            ))}

            {!readOnly && <div className="inputContainerLanguage"><Link className="addToCollection" to={'/entities/newURI/'+this.props.params.id}>Add an URI </Link></div>}

            {_.get(this.entity,'translations',[]).map((translation,i)=>(
              <div className="inputContainerLanguage" key={'translationEntity'+translation.    id_entity_translation}>
                <label>{i?'':'Translation : '}</label>
                <input type="text" value={'['+store.getState().languagesLookup[translation.id_language].name+'] '+translation.text_translated} disabled="true"/>
                {!readOnly && <button type="button" onClick={()=>this.deleteTranslation(translation)} >X</button>}
              </div>
            ))}

            {!readOnly && <div className="inputContainerLanguage"><Link className="addToCollection" to={'/entities/newTranslation/'+this.props.params.id}>Add a translation</Link></div>}


            <div className="inputContainerLanguage"><label>created at : </label><input type="text" value={this.entity.createdAt} disabled="true"/></div>
            <div className="inputContainerLanguage"><label>updated at : </label><input type="text" value={this.entity.updatedAt} disabled="true"/></div>
            {this.entity.id_user && <div className="inputContainerLanguage"><label>Owner : </label><input type="text" value={'['+this.entity.id_user.institution+'] ' + this.entity.id_user.displayName} disabled="true"/></div>}
            {update}
          </form>
        </main>
    );
  }
}
