/**
 * Manuscripts_translations.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'manuscripts_translations',
  autoPK: false,
  attributes: {
    id_manuscript_translations: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    id_manuscript: {
      model:'Manuscripts'
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
    name: {
      type: 'string',
      required: false,
      size: 45
    },
    page: {
      type: 'integer',
      required: false,
      size: 11
    }
  }
};
