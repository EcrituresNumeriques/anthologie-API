import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
import _ from 'lodash'

import {displayLang} from 'helpers/displayLang.jsx'
// components

export default class specificAuthor extends Component {


  constructor(props) {
    super(props);
    let placeholder = {"versions": [{"id_author_version": 0,"id_author": 0,"id_user": 0,"id_group": 0,"id_language": 1,"name": "loading",}],"authorities": [],"images": [],  "entities": [],"id_user": {"id_user": 0,"displayName": "Admin","institution": "Anthologie","country": "Canada","createdAt": "2017-05-24T14:18:59.000Z","updatedAt": "2017-05-25T06:30:46.000Z"},"id_author": 0,"born": null,"born_range": null,"died": null,"died_range": null,"activity_start": null,"activity_end": null,"activity_range": null,"createdAt": "2017-05-25T07:38:26.000Z","updatedAt": "2017-05-25T07:38:26.000Z","city_born":{"id_city":1},"city_died":{"id_city":1}};
    this.author = _.get(store.getState(),'authorsLookup['+this.props.params.id+']',placeholder);
    this.fetchAPI();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteAuthor = this.deleteAuthor.bind(this);
  }

  fetchAPI(){
      let that = this;
      fetch('/api/v1/authors/'+that.props.params.id,{
        method:'GET',
        credentials: 'same-origin'
      })
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        that.author = json;
        //that.refs.city_born = json.city_born;
        that.forceUpdate();
        return null;
      });
  }

  deleteAuthor = function(e){
    e.preventDefault();
    let that = this;
    if(this.refs.confirmDelete.value == "DELETE"){
      fetch('/api/v1/authors/'+that.props.params.id,{
        method:'DELETE',
        credentials: 'same-origin'
      })
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        browserHistory.push('/authors');
        //that.refs.city_born = json.city_born;
        return null;
      });
    }
    else{
      alert('Type "DELETE" if you want to delete this author');
    }
  }

  handleSubmit = function (e) {
    e.preventDefault();
    let that = this;
    //get name and family
    let corps = {city_born:this.refs.city_born.value,city_died:this.refs.city_died.value, born:Number(this.refs.born.value),born_range:Number(this.refs.born_range.value), died:Number(this.refs.died.value),died_range:Number(this.refs.died_range.value),activity_start:Number(this.refs.activity_start.value),activity_end:Number(this.refs.activity_end.value),activity_range:Number(this.refs.activity_range.value)}
    //Add reference to date only if specified
    if(this.refs.born.value === ""){
      corps.born = null;
    }
    if(this.refs.born_range.value === ""){
      corps.born_range = null;
    }
    if(this.refs.died.value === ""){
      corps.died = null;
    }
    if(this.refs.died_range.value === ""){
      corps.died_range = null;
    }
    if(this.refs.activity_start.value === ""){
      corps.activity_start = null;
    }
    if(this.refs.activity_end.value === ""){
      corps.activity_end = null;
    }
    if(this.refs.activity_range.value === ""){
      corps.activity_range = null;
    }
    fetch("/api/v1/authors/"+that.props.params.id,
    {
        method: "POST",
        body: JSON.stringify(corps),
        credentials: 'same-origin'
    })
    .then(function(res){
      if(!res.ok){throw res.json();}
      return res.json()})
    .then(function(data){
      that.author = data;
      that.forceUpdate();
      return null})
    .catch(function(error){return error})
    .then(function(error){if(error != null){alert(error.message)};}.bind(this));
  }

  deleteName = function(version){
    //console.log('clicked',this,version);
    let that = this;
    fetch('/api/v1/authors/'+version.id_author+'/versions/'+version.id_author_version,    {
            method: "DELETE",
            credentials: 'same-origin'
        })
        .then(function(data){
          browserHistory.push('/authors');
          browserHistory.push('/authors/'+that.props.params.id);
        });
  }

  moveToEntity = function(entity){
    browserHistory.push('/entities/'+entity);
  }


  render() {
    let update = <p className="legend">You can't update this record.</p>
    let readOnly = true;
    if((this.author.id_user && store.getState().user && this.author.id_user.id_user == store.getState().user.id_user) || (store.getState().user && store.getState().user.admin)){
      update = <input type="submit" value="Update"/>;
      readOnly = false;
    }
    return (
      <main>
        <h1>{this.author.versions.map(a => a.name).join(" / ")}</h1>
        <h6>anthologia.ecrituresnumeriques.ca/api/v1/authors/{this.author.id_author}</h6>

          <form onSubmit={this.handleSubmit}>
            <div className="inputContainerLanguage"><label>ID author : </label><input type="text" value={this.author.id_author} disabled="true"/></div>
            {this.author.versions.map((version,i)=>(<div className="inputContainerLanguage" key={'authorName'+version.id_author_version}><label>{i?'':'names : '}</label><input type="text" value={'['+  displayLang(store.getState().languagesLookup[version.id_language])+'] '+version.name} disabled="true"/>{!readOnly && <button type="button" onClick={()=>this.deleteName(version)} >X</button>}</div>))}
            {!readOnly && <div className="inputContainerLanguage"><Link className="addToCollection" to={'/authors/newVersion/'+this.props.params.id}>Add a name </Link></div>}

            {this.author.entities.map((entity,i)=>(<div className="inputContainerLanguage" key={'entity'+entity.id_entity}><label>{i?'':'Author of : '}</label><p  onClick={()=>this.moveToEntity(entity.id_entity)}>{entity.title}</p></div>))}
            <div className="inputContainerLanguage">
              <label>Born in : </label>
              <select ref="city_born" defaultValue={_.get(this.author,'city_born.id_city',0)} disabled={readOnly}>
                <option value="0">Undefined</option>
                {store.getState().cities.map((city,i)=>(
                  <option value={city.id_city} key={"cityName"+city.id_city}>{city.versions.map((version)=>(version.name)).join(" / ")}</option>
                ))}
              </select>
            </div>
            <div className="inputContainerLanguage">
              <label>Birth date : </label>
              <input type="number" ref="born" placeholder='ex. "-350" (for 350 B.C.)' defaultValue={_.get(this.author,'born',0)} />
              <label className="smallLabel">±</label>
              <input type="number" ref="born_range" placeholder='ex. "50" (years)' defaultValue={_.get(this.author,'born_range',0)}/>
            </div>

            <div className="inputContainerLanguage">
              <label>Died in : </label>
              <select ref="city_died" defaultValue={_.get(this.author,'city_died.id_city',0)} disabled={readOnly}>
                <option value="0">Undefined</option>
                {store.getState().cities.map((city,i)=>(
                  <option value={city.id_city} key={"cityName"+city.id_city}>{city.versions.map((version)=>(version.name)).join(" / ")}</option>
                ))}
              </select>
            </div>

            <div className="inputContainerLanguage">
              <label>Death date : </label>
              <input type="number" ref="died" placeholder='ex. "-310" (for 310 B.C.)' defaultValue={_.get(this.author,'died',0)} />
              <label className="smallLabel">±</label>
              <input type="number" ref="died_range" placeholder='ex. "50" (years)' defaultValue={_.get(this.author,'died_range',0)}/>
            </div>

            <div className="inputContainerLanguage">
              <label>Activity : </label>
              <input type="number" ref="activity_start" placeholder='from' defaultValue={_.get(this.author,'activity_start',0)}  className="double"/>
              <label className="smallLabel"> - </label>
              <input type="number" ref="activity_end" placeholder='to' defaultValue={_.get(this.author,'activity_end',0)} className="double"/>
              <label className="smallLabel">±</label>
              <input type="number" ref="activity_range" placeholder='ex. "10" (years)' defaultValue={_.get(this.author,'activity_range',0)} className="double" />
            </div>

            <div className="inputContainerLanguage">
              <label>Images :</label>
              <div className="collection">

                {_.get(this.author,'images',[]).map((image)=>(<a href={image.URL} key={"imageEntity"+image.id_image} target="_blank" className="collectionItem"><img src={image.URL} alt={image.title}/></a>))}
                {!readOnly && <Link className="addToCollectionSide" to={'/authors/newImage/'+this.props.params.id}>Add an image </Link>}
              </div>
            </div>

            <div className="inputContainerLanguage"><label>created at : </label><input type="text" value={this.author.createdAt} disabled="true"/></div>
            <div className="inputContainerLanguage"><label>updated at : </label><input type="text" value={this.author.updatedAt} disabled="true"/></div>
            {this.author.id_user && <div className="inputContainerLanguage"><label>Owner : </label><input type="text" value={'['+this.author.id_user.institution+'] ' + this.author.id_user.displayName} disabled="true"/></div>}
            {update}
            {store.getState().user && store.getState().user.admin &&
              <div className="alertBlock">
                <p>Deleting this author is an operation that cannot be recovered, are you sure you want to delete it?</p>
                <input placeholder="Write 'DELETE' here to confirm you want to delete this author" ref="confirmDelete"/>
              <button onClick={this.deleteAuthor}>Delete</button>
            </div>}
          </form>
        </main>
    );
  }
}
