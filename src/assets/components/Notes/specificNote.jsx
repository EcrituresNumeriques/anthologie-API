import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
import _ from 'lodash'
import {displayLang} from 'helpers/displayLang.jsx'
import {nl2br} from 'helpers/nl2br.jsx';

// components

export default class specificNote extends Component {


  constructor(props) {
    super(props);
    this.state = {loaded : false};
    this.fetchAPI = this.fetchAPI.bind(this);
    this.fetchAPI();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchAPI(){
      let that = this;
      fetch('/api/v1/notes/'+that.props.params.id,{
        method:'GET',
        credentials: 'same-origin'
      })
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        that.note = json;
        //that.refs.city_born = json.city_born;
        document.title = json.title+" | anthologie";
        store.dispatch({type:'ADD_NOTE',payload:json});
        that.setState({loaded: true});
        that.forceUpdate();
        return null;
      });
  }

  handleSubmit = function (e) {
    e.preventDefault();
    let that = this;
    //get name and family
    let corps = {title:this.refs.title.value}
    fetch("/api/v1/notes/"+that.props.params.id,
    {
        method: "POST",
        body: JSON.stringify(corps),
        credentials: 'same-origin'
    })
    .then(function(res){
      if(!res.ok){throw res.json();}
      return res.json()})
    .then(function(data){
      that.note = data;
      that.forceUpdate();
      return null})
    .catch(function(error){return error})
    .then(function(error){if(error != null){alert(error.message)};}.bind(this));
  }

  deleteVersion = function(version){
    //console.log('clicked',this,version);
    let that = this;
    fetch('/api/v1/notes/'+that.props.params.id+'/versions/'+version.id_note_version,    {
            method: "DELETE",
            credentials: 'same-origin'
        })
        .then(function(data){
          browserHistory.push('/notes');
          browserHistory.push('/notes/'+that.props.params.id);
        });
  }
  deleteEntities = function(entity){
    //console.log('clicked',this,version);
    let that = this;
    fetch('/api/v1/notes/'+that.props.params.id+'/entity/'+entity.id_entity,    {
            method: "DELETE",
            credentials: 'same-origin'
        })
        .then(function(data){
          browserHistory.push('/notes');
          browserHistory.push('/notes/'+that.props.params.id);
        });
  }
  moveToEntity = function(entity){
    browserHistory.push('/entities/'+entity);
  }
  accordeon = function(e){
    let that = this;
    this.refs[e].classList.toggle("limited");
  }

  render() {
    let update = <p className="legend">You can't update this record.</p>
    let readOnly = true;
    if(this.state.loaded && (this.note.id_user && store.getState().user && this.note.id_user.id_user == store.getState().user.id_user) || (store.getState().user && store.getState().user.admin)){
      update = <input type="submit" value="Update"/>;
      readOnly = false;
    }
    let content;
    if(this.state.loaded){
      content =  (
        <div>
          <h1>{this.note.title}</h1>
          <h6>anthologia.ecrituresnumeriques.ca/api/v1/notes/{this.note.id_note}</h6>

            <form onSubmit={this.handleSubmit}>
              <div className="inputContainerLanguage">
                <label>ID note : </label>
                <input type="text" value={this.note.id_note} disabled="true"/>
              </div>

              <div className="inputContainerLanguage">
                <label>title : </label>
                <input placeholder="ex. : A.P. 5.1" type="text" ref="title" defaultValue={this.note.title} disabled={readOnly} />
              </div>

              {_.get(this.note,'entities',[]).map((entity,i)=>(
                <div className="inputContainerLanguage" key={'entityNote'+entity.id_entity}>
                  <label>{i?'':'Entities : '}</label>
                  <p onClick={()=>this.moveToEntity(entity.id_entity)}>{entity.title}</p>
                  {!readOnly && <button type="button" onClick={()=>(this.deleteEntities(entity))} >X</button>}
                </div>
              ))}

              {!readOnly && <div className="inputContainerLanguage">
                <Link className="addToCollection" to={'/notes/newEntity/'+this.props.params.id}>Add a linked entity</Link>
              </div>}


              <div className="inputContainerLanguage">
                <label>Images :</label>
                <div className="collection">

                  {_.get(this.note,'images',[]).map((image)=>(<a href={image.URL} key={"imageNote"+image.id_image} target="_blank" className="collectionItem"><img src={image.URL} alt={image.title}/></a>))}
                  {!readOnly && <Link className="addToCollectionSide" to={'/notes/newImage/'+this.props.params.id}>Add an image </Link>}
                </div>
              </div>

              {_.get(this.note,'versions',[]).map((version,i)=>(
                <div className="inputContainerLanguage" key={'versionNote'+version.    id_note_version}>
                  <label>{i?'':'Versions : '}</label>
                  <p ref={'versionParagraphNote'+version.id_note_version} onDoubleClick={()=>this.accordeon('versionParagraphNote'+version.id_note_version)} className="limited">[{displayLang(store.getState().languagesLookup[version.id_language])}] by {store.getState().usersLookup[version.id_user].displayName} {nl2br(version.text)}</p>
                  {!readOnly && <button type="button" onClick={()=>(this.deleteVersion(version))} >X</button>}
                </div>
              ))}

              {!readOnly && <div className="inputContainerLanguage">
                <Link className="addToCollection" to={'/notes/newVersion/'+this.props.params.id}>Add a version</Link>
              </div>}



              <div className="inputContainerLanguage"><label>created at : </label><input type="text" value={this.note.createdAt} disabled="true"/></div>
              <div className="inputContainerLanguage"><label>updated at : </label><input type="text" value={this.note.updatedAt} disabled="true"/></div>
              {this.note.id_user && <div className="inputContainerLanguage"><label>Owner : </label><input type="text" value={'['+this.note.id_user.institution+'] ' + this.note.id_user.displayName} disabled="true"/></div>}
              {update}
            </form>
          </div>
      )
    }
    else{content = (
      <div><h1>Loading</h1></div>
    )}

    return (
      <main>
        {content}
      </main>
    )
  }
}
