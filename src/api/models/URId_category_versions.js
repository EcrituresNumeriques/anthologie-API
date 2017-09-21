/**
 * URId_categories_.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'URId_categories_version',
  autoPK: false,
  attributes: {
    id_urid_category_version: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    id_urid_category: {
      model:'URId_categories'
    },
    id_user: {
      model:'Users'
    },
    id_group: {
      model:'User_Groups'
    },
    id_language: {
      model:'Languages'
    },
    label: {
      type: 'string',
      required: false,
      size: 45
    }
  }
};
