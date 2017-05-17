/**
 * URI_source.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'URI_source',
  autoPK: false,
  attributes: {
    id_URI_source: {
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
    name: {
      type: 'string',
      required: false,
      size: 100
    },
    base: {
      type: 'string',
      required: false,
      size: 128
    }
  }
};
