import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
import _ from 'lodash'

// components

export default class specificNote extends Component {


  constructor(props) {
    super(props);
    let placeholder = {"texts":[],"images":[],"authors":[],"id_user":{"id_user":1,"displayName":"admin","institution":"API"},"id_note":0,"title":"loading","date":null,"date_range":null,"createdAt":"2017-05-29T03:26:39.000Z","updatedAt":"2017-05-29T03:26:39.000Z"};
    this.note = _.get(store.getState(),'notesLookup['+this.props.params.id+']',placeholder);
    this.fetchAPI();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.translationSelected = [];
    this.state = {alignThem:'Select 2 texts to align'}
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

  deleteTranslation = function(translation){
    //console.log('clicked',this,translation);
    let that = this;
    fetch('/api/v1/notes/'+that.props.params.id+'/translations/'+translation.id_note_translation,    {
            method: "DELETE",
            credentials: 'same-origin'
        })
        .then(function(data){
          browserHistory.push('/notes');
          browserHistory.push('/notes/'+that.props.params.id);
        });
  }


  componentWillMount(){
    document.title = this.note.title+" | anthologie";
  }


  render() {
    let update = <p className="legend">You can't update this record.</p>
    let readOnly = true;
    if((this.note.id_user && store.getState().user && this.note.id_user.id_user == store.getState().user.id_user) || (store.getState().user && store.getState().user.admin)){
      update = <input type="submit" value="Update"/>;
      readOnly = false;
    }
    return (
      <main>
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

            {_.get(this.note,'authors',[]).map((author,i)=>(
              <div className="inputContainerLanguage" key={'authorNote'+author.id_author}>
                <label>{i?'':'Authors : '}</label>
                <p onClick={()=>this.moveToAuthor(author.id_author)}>{store.getState().authorsLookup[author.id_author].translations.map((translation)=>(translation.name)).join(" / ")}</p>
                {!readOnly && <button type="button" onClick={()=>this.deleteName(author)} >X</button>}
              </div>
            ))}

            {!readOnly && <div className="inputContainerLanguage"><Link className="addToCollection" to={'/notes/newAuthor/'+this.props.params.id}>Add an author </Link></div>}

            {_.get(this.note,'uris',[]).map((uri,i)=>(
              <div className="inputContainerLanguage" key={'uriNote'+uri.id_urid}>
                <label>{i?'':'URIs : '}</label>
                <input type="text" value={uri.value} disabled="true"/>
                {!readOnly && <button type="button" onClick={()=>this.deleteUri(uri)} >X</button>}
              </div>
            ))}

            {!readOnly && <div className="inputContainerLanguage"><Link className="addToCollection" to={'/notes/newURI/'+this.props.params.id}>Add an URI </Link></div>}

            {_.get(this.note,'translations',[]).map((translation,i)=>(
              <div className="inputContainerLanguage" key={'translationNote'+translation.    id_note_translation}>
                <label>{i?'':'Translations : '}</label>
                <input type="checkbox" className="noFlex" ref={"checkboxTranslation"+translation.id_note_translation} onChange={(e)=>this.addToAlignId(e,translation)}/>
                <input type="text" value={'['+store.getState().languagesLookup[translation.id_language].name+'] '+translation.text_translated} disabled="true"/>
                {!readOnly && <button type="button" onClick={()=>(this.deleteTranslation(translation))} >X</button>}
              </div>
            ))}

            {!readOnly && <div className="inputContainerLanguage">
              <Link className="addToCollection" onClick={(e)=>(this.sendToAlign(e))}>{this.state.alignThem}</Link>
              <Link className="addToCollectionSide" to={'/notes/newTranslation/'+this.props.params.id}>Add a translation</Link>
            </div>}

            {_.get(this.note,'alignements',[]).map((alignement,i)=>(
              <div className="inputContainerLanguage" key={'alignementNote'+alignement.id_align}>
                <label>{i?'':'Alignements : '}</label>
                <Link to={"/notes/"+alignement.id_note+"/showalign/"+alignement.id_align}> {'['+store.getState().languagesLookup[alignement.source_lang].name+'] => ['+store.getState().languagesLookup[alignement.target_lang].name+'] by  '+alignement.id_user} </Link>
                {!readOnly && <button type="button" onClick={()=>(this.deleteAlignement(alignement))} >X</button>}
              </div>
            ))}

            {_.get(this.note,'keywords',[]).map((keyword,i)=>(
              <div className="inputContainerLanguage" key={'keywordNote'+keyword.id_keyword}>
                <label>{i?'':'Keywords : '}</label>
                <p onClick={()=>this.moveToKeyword(keyword.id_keyword)}>{_.get(store.getState().keywordsLookup[keyword.id_keyword],'translations',[]).map((translation)=>(translation.title)).join(" / ")}</p>
                {!readOnly && <button type="button" onClick={()=>this.deleteKeyword(keyword)} >X</button>}
              </div>
            ))}

            {!readOnly && <div className="inputContainerLanguage"><Link className="addToCollection" to={'/notes/newKeyword/'+this.props.params.id}>Add a Keyword </Link></div>}

            <div className="inputContainerLanguage">
              <label>Images :</label>
              <div className="collection">

                {_.get(this.note,'images',[]).map((image)=>(<a href={image.URL} key={"imageNote"+image.id_image} target="_blank" className="collectionItem"><img src={image.URL} alt={image.title}/></a>))}
                {!readOnly && <Link className="addToCollectionSide" to={'/notes/newImage/'+this.props.params.id}>Add an image </Link>}
              </div>
            </div>


            <div className="inputContainerLanguage"><label>created at : </label><input type="text" value={this.note.createdAt} disabled="true"/></div>
            <div className="inputContainerLanguage"><label>updated at : </label><input type="text" value={this.note.updatedAt} disabled="true"/></div>
            {this.note.id_user && <div className="inputContainerLanguage"><label>Owner : </label><input type="text" value={'['+this.note.id_user.institution+'] ' + this.note.id_user.displayName} disabled="true"/></div>}
            {update}
          </form>
        </main>
    );
  }
}
