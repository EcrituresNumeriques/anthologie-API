/**
 * Eras.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'eras',
  autoPK: false,
  attributes: {
    id_era: {
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
    date_begin: {
      type: 'integer',
      required: false,
      size: 6
    },
    date_end: {
      type: 'integer',
      required: false,
      size: 6
    },
    versions:{
      collection: 'Era_versions',
      via: 'id_era'
    },
    images:{
      collection:'Images',
      via:'eras',
      dominant:true
    }
  }
};
