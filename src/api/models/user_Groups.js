/**
 * Fos_groups.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  autoPK: false,
  attributes: {
    id_group: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    name: {
      type: 'string',
      required: true,
      size: 255
    },
    visibile:{
      type:'boolean'
    },
    users:{
      collection:'Users',
      via:'groups',
      dominant:true
    }
  }
};
