/**
 * URId.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'URId',
  autoPK: false,
  attributes: {
    id_urid: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    id_entity: {
      model:'Entities'
    },
    id_user: {
      model:'Users'
    },
    id_group: {
      model:'User_Groups'
    },
    id_urid_category: {
      model:'URId_categories'
    },
    id_urid_source: {
      model:'URI_source'
    },
    value: {
      type: 'string',
      required: false,
      size: 255
    },
    URN: {
      type: 'string',
      required: false,
      size: 128
    }
  }
};
