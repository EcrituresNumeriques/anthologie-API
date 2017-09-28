/**
 * Entities.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

cleanAssoc = function(destroyedRecords, cb){
  URId.destroy({id_entity:destroyedRecords.map((entity)=>(entity.id_entity))}).exec(function(err){
      cb();
  })
  //destroy versions
  //scholies
  //notes
  //alignements  
}

module.exports = {
  tableName: 'entities',
  autoPK: false,
  attributes: {
    id_entity: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    id_book: {
      model:'Books'
    },
    id_era: {
      model:'Eras'
    },
    id_genre: {
      model:'Genres'
    },
    id_user: {
      model:'Users'
    },
    id_group: {
      model:'User_Groups'
    },
    title: {
      type: 'string',
      required: true,
      size: 45
    },
    date: {
      type: 'integer',
      required: false,
      size: 6
    },
    date_range: {
      type: 'integer',
      required: false,
      size: 6
    },
    versions:{
      collection:'Entity_versions',
      via:'id_entity',
      dominant:true
    },
    drafts:{
      collection:'Entity_drafts',
      via:'id_entity',
      dominant:true
    },
    alignements:{
      collection:'Entity_versions_align',
      via:'id_entity',
      dominant:true
    },
    scholies:{
      collection:'Scholies',
      via:'entities'
    },
    references:{
      collection:'entities',
      via:'id_entity'
    },
    notes:{
     collection:'Notes',
     via:'entities'
   },
   motifs:{
     collection:'Motifs',
     via:'id_entity'
   },
   keywords:{
     collection:'Keywords',
     via:'entities',
     dominant:true
   },
   images:{
     collection:'images',
     via:'entities',
     dominant:true
   },
   imagesManuscript:{
     collection:'images',
     via:'manuscripts',
     dominant:true
   },
   authors:{
     collection:'Authors',
     via:'entities',
     dominant:true
   },
   uris:{
     collection:'URId',
     via:'id_entity',
     dominant:true
   },
   internalRef_sources:{
     collection:'Entities',
     via:'internalRef_targets'
   },
   internalRef_targets:{
     collection:'Entities',
     via:'internalRef_sources',
     dominant:true
   },
   externalRef:{
     collection:'Entity_externalRefs',
     via:'id_entity',
     dominant:true,
   }
 },
 afterDestroy: cleanAssoc
};
