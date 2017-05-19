/**
 * URId_categories_translation.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'URId_categories_translation',
  autoPK: false,
  attributes: {
    id_urid_category_translation: {
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
