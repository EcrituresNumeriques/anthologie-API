/**
 * Notes.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'notes',
  autoPK: false,
  attributes: {
    id_note: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    id_user: {
      model:'Users'
    },
    id_group: {
      model:'User_Groups'
    },
    translations:{
      collection:'Note_translations',
      via:'id_note'
    },
    title:{
      type:'string',
      size:64
    },
    entities:{
      collection:'Entities',
      via:'notes',
      dominant:true
    },
    images:{
      collection:'images',
      via:'notes',
      dominant:true
    }
  }
};
