/**
 * Authors.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'authors',
  autoPK: false,
  attributes: {
    id_author:{
      type:'integer',
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    translations: {
      collection:'Author_translations',
      via: 'id_author'
    },
    authorities: {
      collection : 'Author_authority',
      via: 'id_author'
    },
    images: {
      collection:'Images',
      via:'authors',
      dominant:true
    },
    city_born: {
      model:'Cities'
    },
    city_died: {
      model:'Cities'
    },
    id_era: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    id_user: {
      model:'Users'
    },
    id_group: {
      model:'User_Groups'
    },
    born: {
      type: 'integer',
      required: false,
      size: 11
    },
    born_range: {
      type: 'integer',
      required: false,
      size: 6
    },
    died: {
      type: 'integer',
      required: false,
      size: 11
    },
    died_range: {
      type: 'integer',
      required: false,
      size: 6
    },
    activity: {
      type: 'integer',
      required: false,
      size: 6
    },
    activity_range: {
      type: 'integer',
      required: false,
      size: 6
    },
    entities:{
      collection:'Entities',
      via:'authors'
    }
  }
};
