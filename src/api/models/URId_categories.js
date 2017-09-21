/**
 * URId_categories.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'URId_categories',
  autoPK: false,
  attributes: {
    id_URId_category: {
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
    versions:{
      collection:'URId_category_versions',
      via:'id_urid_category'
    },
    uris:{
      collection:'URId',
      via:'id_urid_category'
    }
  }
};
