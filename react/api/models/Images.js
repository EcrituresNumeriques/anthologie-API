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
    id: {
      type: 'integer',
      required: true,
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    id_user: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    id_group: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
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
      via: 'id_author'
    }
  }
};
