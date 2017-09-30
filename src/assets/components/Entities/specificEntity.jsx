import React, { Component } from 'react';
import Router, { Link, RouteHandler } from 'react-router';
import { browserHistory } from 'react-router';

import {store} from '../../Redux/store'
import _ from 'lodash'

import {displayLang} from 'helpers/displayLang.jsx'
import {acl} from 'helpers/acl.jsx'
// components

export default class specificEntity extends Component {


  constructor(props) {
    super(props);
    let placeholder = {"texts":[],"scholies":[],"references":[],"notes":[],"motifs":[],"manuscripts":[],"keywords":[],"images":[],"authors":[],"id_user":{"id_user":1,"displayName":"admin","institution":"API"},"id_entity":1,"title":"title","date":null,"date_range":null,"createdAt":"2017-05-29T03:26:39.000Z","updatedAt":"2017-05-29T03:26:39.000Z"};
    this.entity = _.get(store.getState(),'entitiesLookup['+this.props.params.id+']',placeholder);
    this.fetchAPI();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.moveToEntity = this.moveToEntity.bind(this);
    this.accordeon = this.accordeon.bind(this);
    this.deleteEntity = this.deleteEntity.bind(this);
    this.versionSelected = [];
    this.state = {alignThem:'Select 2 texts to align',loaded:false}
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
        that.setState({loaded:true});
        //that.refs.city_born = json.city_born;
        return null;
      });
  }

 deleteEntity = function(e){
   e.preventDefault();
   let that = this;
   if(this.refs.confirmDelete.value == "DELETE"){
     fetch('/api/v1/entities/'+that.props.params.id,{
       method:'DELETE',
       credentials: 'same-origin'
     })
     .then(function(response){
       return response.json();
     })
     .then(function(json){
       browserHistory.push('/entities');
       //that.refs.city_born = json.city_born;
       return null;
     });
   }
   else{
     alert('Type "DELETE" if you want to delete this entity');
   }
 }
  accordeon = function(e){
    let that = this;
    this.refs[e].classList.toggle("limited");
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
    if (confirm('Are you sure you want to unlink this author?')) {
      //console.log('clicked',this,version);
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
  }
  deleteUri = function(uri){
    if (confirm('Are you sure you want to delete this URI?')) {
      //console.log('clicked',this,version);
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
  }
  deleteVersion = function(version){
        if (confirm('Are you sure you want to delete this version?')) {
    //console.log('clicked',this,version);
    let that = this;
    fetch('/api/v1/entities/'+that.props.params.id+'/versions/'+version.id_entity_version,    {
            method: "DELETE",
            credentials: 'same-origin'
        })
        .then(function(data){
          browserHistory.push('/entities');
          browserHistory.push('/entities/'+that.props.params.id);
        });
      }
  }
  deleteDraft = function(draft){
        if (confirm('Are you sure you want to delete this draft?')) {
    let that = this;
    fetch('/api/v1/entities/'+that.props.params.id+'/drafts/'+draft.id_entity_draft,    {
            method: "DELETE",
            credentials: 'same-origin'
        })
        .then(function(data){
          browserHistory.push('/entities');
          browserHistory.push('/entities/'+that.props.params.id);
        });
      }
  }
  deleteAlignement = function(align){
        if (confirm('Are you sure you want to delete this alignement?')) {
    console.log(align);
    let that = this;
    fetch('/api/v1/alignements/'+align.id_align,    {
            method: "DELETE",
            credentials: 'same-origin'
        })
        .then(function(data){
          browserHistory.push('/home');
          browserHistory.push('/entities/'+that.props.params.id);
        });
      }
  }

  addToAlignId = function(e,version){
    let that = this;
    //console.log(e,version)
    if(e.target.checked){
      that.versionSelected.push(version.id_entity_version);
    }
    else{
      let index = that.versionSelected.indexOf(version.id_entity_version);
      if (index > -1) {
          that.versionSelected.splice(index, 1);
      }
    }
    if(that.versionSelected.length<2){
      that.setState({alignThem:"Select 2 texts to align"});
    }
    else{
      if(that.versionSelected.length>2){
        that.refs['checkboxVersion'+that.versionSelected[0]].checked = false;
        that.versionSelected.splice(0,1);
      }
      that.setState({alignThem:"Align those 2 texts"});
    }
  }
  sendToAlign = function(e){
    e.preventDefault();
    let that = this;
    if(that.versionSelected.length == 2){
      browserHistory.push('/entities/'+that.props.params.id+"/aligntexts/"+that.versionSelected.sort().join("/"));
    }
  }
  moveToAuthor = function(author){
    browserHistory.push('/authors/'+author);
  }
  moveToEntity = function(entity){
    browserHistory.push('/entities/'+entity);
    this.props.params.id = entity;
    this.setState({loaded:false});
  }
  moveToKeyword = function(keyword){
    browserHistory.push('/keywords/'+keyword);
  }
  deleteKeyword = function(keyword){
    //console.log('clicked',this,version);
    let that = this;
    fetch('/api/v1/entities/'+that.props.params.id+'/keywords/'+keyword.id_keyword,    {
            method: "DELETE",
            credentials: 'same-origin'
        })
        .then(function(data){
          browserHistory.push('/entities');
          browserHistory.push('/entities/'+that.props.params.id);
        });
  }
  moveToScholie = function(scholie){
    browserHistory.push('/scholies/'+scholie);
  }
  deleteScholie = function(scholie){
    //console.log('clicked',this,version);
    let that = this;
    fetch('/api/v1/scholies/'+scholie.id_scholie+'/entity/'+that.props.params.id,    {
            method: "DELETE",
            credentials: 'same-origin'
        })
        .then(function(data){
          browserHistory.push('/entities');
          browserHistory.push('/entities/'+that.props.params.id);
        });
  }
  moveToNote = function(note){
    browserHistory.push('/notes/'+note);
  }
  deleteNote = function(note){
    //console.log('clicked',this,version);
    let that = this;
    fetch('/api/v1/notes/'+note.id_note+'/entity/'+that.props.params.id,    {
            method: "DELETE",
            credentials: 'same-origin'
        })
        .then(function(data){
          browserHistory.push('/entities');
          browserHistory.push('/entities/'+that.props.params.id);
        });
  }
  deleteRef = function(ref){
    //console.log('clicked',this,version);
    let that = this;
    fetch('/api/v1/entities/'+that.props.params.id+'/internalref/'+ref.id_entity,    {
            method: "DELETE",
            credentials: 'same-origin'
        })
        .then(function(data){
          that.setState({loaded:false});
        });
  }
  deleteExRef = function(ref){
    //console.log('clicked',this,version);
    let that = this;
    fetch('/api/v1/entities/'+that.props.params.id+'/externalref/'+ref.id_entity_external,    {
            method: "DELETE",
            credentials: 'same-origin'
        })
        .then(function(data){
          that.setState({loaded:false});
        });
  }

  componentWillMount(){
    document.title = this.entity.title+" | anthologie";
  }

  componentWillUpdate(nextProps, nextState){
    if(this.props.params.id != nextProps.params.id){
      this.props.params.id = nextProps.params.id;
      this.setState({loaded:false});
    }
  }

  componentDidUpdate(){
    if(!this.state.loaded){
      this.fetchAPI();
    }
  }


  render() {
    let update = <p className="legend">You can't update this record.</p>
    let readOnly = true;
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
              {!this.state.loaded && <p>{this.entity.title}</p>}
              {this.state.loaded && <input placeholder="ex. : A.P. 5.1" type="text" ref="title" defaultValue={this.entity.title} disabled={readOnly} />}
            </div>

            {_.get(this.entity,'authors',[]).map((author,i)=>(
              <div className="inputContainerLanguage" key={'authorEntity'+author.id_author}>
                <label>{i?'':'Authors : '}</label>
                <p onClick={()=>this.moveToAuthor(author.id_author)}>{store.getState().authorsLookup[author.id_author].versions.map((version)=>(version.name)).join(" / ")}</p>
                {acl('isOwner',this.entity.id_user.id_user) && <button type="button" onClick={()=>this.deleteName(author)} >X</button>}
              </div>
            ))}

            {acl('isLogedin') && <div className="inputContainerLanguage"><Link className="addToCollection" to={'/entities/newAuthor/'+this.props.params.id}>Add an author </Link></div>}

            {_.get(this.entity,'uris',[]).map((uri,i)=>(
              <div className="inputContainerLanguage" key={'uriEntity'+uri.id_urid}>
                <label>{i?'':'URIs : '}</label>
                <input type="text" value={uri.value} disabled="true"/>
                {!readOnly && <button type="button" onClick={()=>this.deleteUri(uri)} >X</button>}
              </div>
            ))}

            {acl('isLogedin') && <div className="inputContainerLanguage"><Link className="addToCollection" to={'/entities/newURI/'+this.props.params.id}>Add an URI </Link></div>}

            <div className="inputContainerLanguage">
              <label>Manuscripts :</label>
              <div className="collection">

                {_.get(this.entity,'imagesManuscript',[]).map((image)=>(<a href={image.URL} key={"imageEntity"+image.id_image} target="_blank" className="collectionItem"><img src={image.URL} alt={image.title}/></a>))}
                {acl('isLogedin') && <Link className="addToCollectionSide" to={'/entities/newImageManuscript/'+this.props.params.id}>Add an image </Link>}
              </div>
            </div>

            {_.get(this.entity,'drafts',[]).map((draft,i)=>(acl('isOwner',draft.id_user)?
              <div className="inputContainerLanguage" key={'draftEntity'+draft.id_entity_draft}>
                <label>{i?'':'Drafts : '}</label>
                <p ref={'draftParagraphEntity'+draft.id_entity_draft} onDoubleClick={()=>this.accordeon('draftParagraphEntity'+draft.id_entity_draft)} className="limited">
                    <Link to={"/entities/draft/"+draft.id_entity_draft} className>Edit this draft</Link><br/>
                    [{displayLang(store.getState().languagesLookup[draft.id_language])}{draft.edition?' ('+draft.edition+')':''}] by {store.getState().usersLookup[draft.id_user].displayName}
                  {draft.text_translated.split('\n').map((item,i)=>(<span key={"lineForText"+draft.id_entity_draft+"-"+i}><br/>{item}</span>))}
                  </p>
                <button type="button" onClick={()=>(this.deleteDraft(draft))} >X</button>
              </div>:null
            ))}

            {acl('isLogedin') && <div className="inputContainerLanguage"><Link className="addToCollection" to={'/entities/newdraft/'+this.props.params.id}>Add a Draft </Link></div>}


            {_.get(this.entity,'versions',[]).map((version,i)=>(
              <div className="inputContainerLanguage" key={'versionEntity'+version.id_entity_version}>
                <label>{i?'':'Versions : '}</label>
                <input type="checkbox" className="noFlex" ref={"checkboxVersion"+version.id_entity_version} onChange={(e)=>this.addToAlignId(e,version)}/>
                <p ref={'versionParagraphEntity'+version.id_entity_version} onDoubleClick={()=>this.accordeon('versionParagraphEntity'+version.id_entity_version)} className="limited">[{displayLang(store.getState().languagesLookup[version.id_language])}{version.edition?' ('+version.edition+')':''}] by {store.getState().usersLookup[version.id_user].displayName}
                  {version.text_translated.split('\n').map((item,i)=>(<span key={"lineForText"+version.id_entity_version+"-"+i}><br/>{item}</span>))}</p>
                {!readOnly && <button type="button" onClick={()=>(this.deleteVersion(version))} >X</button>}
              </div>
            ))}

            {acl('isLogedin') && <div className="inputContainerLanguage">
              <Link className="addToCollection" onClick={(e)=>(this.sendToAlign(e))}>{this.state.alignThem}</Link>
              <Link className="addToCollectionSide" to={'/entities/newVersion/'+this.props.params.id}>Add a version</Link>
            </div>}

            {_.get(this.entity,'alignements',[]).map((alignement,i)=>(
              <div className="inputContainerLanguage" key={'alignementEntity'+alignement.id_align}>
                <label>{i?'':'Alignements : '}</label>
                <Link to={"/entities/"+alignement.id_entity+"/showalign/"+alignement.id_align}> {'['+displayLang(store.getState().languagesLookup[alignement.source_lang])+'] => ['+displayLang(store.getState().languagesLookup[alignement.target_lang])+'] by  '+ store.getState().usersLookup[alignement.id_user].displayName} </Link>
                {!readOnly && <button type="button" onClick={()=>(this.deleteAlignement(alignement))} >X</button>}
              </div>
            ))}

            {_.get(this.entity,'keywords',[]).map((keyword,i)=>(
              <div className="inputContainerLanguage" key={'keywordEntity'+keyword.id_keyword}>
                <label>{i?'':'Keywords : '}</label>
                <p onClick={()=>this.moveToKeyword(keyword.id_keyword)}>{_.get(store.getState().keywordsLookup[keyword.id_keyword],'versions',[]).map((version)=>(version.title)).join(" / ")}</p>
                {!readOnly && <button type="button" onClick={()=>this.deleteKeyword(keyword)} >X</button>}
              </div>
            ))}

            {acl('isLogedin') && <div className="inputContainerLanguage"><Link className="addToCollection" to={'/entities/newKeyword/'+this.props.params.id}>Add a Keyword </Link></div>}

            <div className="inputContainerLanguage">
              <label>Images :</label>
              <div className="collection">

                {_.get(this.entity,'images',[]).map((image)=>(<a href={image.URL} key={"imageEntity"+image.id_image} target="_blank" className="collectionItem"><img src={image.URL} alt={image.title}/></a>))}
                {acl('isLogedin') && <Link className="addToCollectionSide" to={'/entities/newImage/'+this.props.params.id}>Add an image </Link>}
              </div>
            </div>

            {_.get(this.entity,'scholies',[]).map((scholie,i)=>(
              <div className="inputContainerLanguage" key={'scholieEntity'+scholie.id_scholie}>
                <label>{i?'':'Scholies : '}</label>
                <p onClick={()=>this.moveToScholie(scholie.id_scholie)}>{scholie.title}</p>
                {!readOnly && <button type="button" onClick={()=>this.deleteScholie(scholie)} >X</button>}
              </div>
            ))}
            {acl('isLogedin') && <div className="inputContainerLanguage"><Link className="addToCollection" to={'/entities/newScholie/'+this.props.params.id}>Add a scholie </Link></div>}

            {_.get(this.entity,'notes',[]).map((note,i)=>(
              <div className="inputContainerLanguage" key={'noteEntity'+note.id_note}>
                <label>{i?'':'Notes : '}</label>
                <p onClick={()=>this.moveToNote(note.id_note)}>{note.title}</p>
                {!readOnly && <button type="button" onClick={()=>this.deleteNote(note)} >X</button>}
              </div>
            ))}
            {acl('isLogedin') && <div className="inputContainerLanguage"><Link className="addToCollection" to={'/entities/newNote/'+this.props.params.id}>Add a note </Link></div>}


            {_.get(this.entity,'internalRef_targets',[]).map((ref,i)=>(
              <div className="inputContainerLanguage" key={'refEntity'+ref.id_entity}>
                <label>{i?'':'Internal References : '}</label>
                <p onClick={()=>this.moveToEntity(ref.id_entity)}>{ref.title}</p>
                {!readOnly && <button type="button" onClick={()=>this.deleteRef(ref)} >X</button>}
              </div>
            ))}
            {acl('isLogedin') && <div className="inputContainerLanguage"><Link className="addToCollection" to={'/entities/newInternalRef/'+this.props.params.id}>Add an internal reference </Link></div>}

            {_.get(this.entity,'externalRef',[]).map((ref,i)=>(
              <div className="inputContainerLanguage" key={'refExEntity'+ref.id_entity}>
                <label>{i?'':'External References : '}</label>
                <a href={ref.url} target="_blank">{ref.title} ({ref.url})</a>
                {!readOnly && <button type="button" onClick={()=>this.deleteExRef(ref)} >X</button>}
              </div>
            ))}
            {acl('isLogedin') && <div className="inputContainerLanguage"><Link className="addToCollection" to={'/entities/newExternalRef/'+this.props.params.id}>Add an external reference </Link></div>}


            <div className="inputContainerLanguage"><label>created at : </label><input type="text" value={this.entity.createdAt} disabled="true"/></div>
            <div className="inputContainerLanguage"><label>updated at : </label><input type="text" value={this.entity.updatedAt} disabled="true"/></div>
            {this.entity.id_user && <div className="inputContainerLanguage"><label>Owner : </label><input type="text" value={'['+this.entity.id_user.institution+'] ' + this.entity.id_user.displayName} disabled="true"/></div>}
            {update}
            {store.getState().user && store.getState().user.admin &&
              <div className="alertBlock">
                <p>Deleting this entity is an operation that cannot be recovered, are you sure you want to delete it?</p>
                <input placeholder="Write 'DELETE' here to confirm you want to delete this entity" ref="confirmDelete"/>
              <button onClick={this.deleteEntity}>Delete</button>
            </div>}
          </form>
        </main>
    );
  }
}
