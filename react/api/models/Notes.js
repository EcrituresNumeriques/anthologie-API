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
    id_motif: {
      type: 'integer',
      required: true,
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
    id_entity:{
      model:'Entities'
    }
  }
};
