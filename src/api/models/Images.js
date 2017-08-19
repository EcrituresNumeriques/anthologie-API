/**
 * Images.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'images',
  autoPK: false,
  attributes: {
    id_image: {
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
    URL: {
      type: 'string',
      required: true,
      size: 255
    },
    file: {
      type: 'string',
      required: false,
      size: 128
    },
    title: {
      type: 'string',
      required: false,
      size: 255
    },
    credit: {
      type: 'string',
      required: false,
      size: 45
    },
    authors:{
      collection: 'Authors',
      via: 'images'
    },
    cities:{
      collection:'Cities',
      via: 'images'
    },
    eras:{
      collection:'Eras',
      via: 'images'
    },
    keywords:{
      collection:'Keywords',
      via:'images'
    },
    manuscripts:{
      collection:'Manuscripts',
      via:'images'
    },
    scholies:{
      collection:'Scholies',
      via:'images'
    },
    entities:{
      collection:'Entities',
      via:'images'
    },
    notes:{
      collection:'Notes',
      via:'images'
    }
  }
};
