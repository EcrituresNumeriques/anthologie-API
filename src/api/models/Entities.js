/**
 * Entities.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

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
    texts:{
      collection:'Texts',
      via:'id_entity'
    },
    translations:{
      collection:'Entity_translations',
      via:'id_entity',
      dominant:true
    },
    alignements:{
      collection:'Entity_translations_align',
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
   manuscripts:{
     collection:'Manuscripts',
     via:'id_entity',
     dominant:true
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
   authors:{
     collection:'Authors',
     via:'entities',
     dominant:true
   },
   uris:{
     collection:'URId',
     via:'id_entity',
     dominant:true
   }
  }
};
