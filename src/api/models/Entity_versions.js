/**
 * Entities_s.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'entities_versions',
  autoPK: false,
  attributes: {
    id_entity_version: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    alignements_source:{
      collection:'Entity_versions_align',
      via:'source'
    },
    alignements_target:{
      collection:'Entity_versions_align',
      via:'target'
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
    id_language: {
      model:'Languages'
    },
    text_translated: {
      type: 'text',
      required: false
    },
    edition: {
      type: 'text',
      required: false
    }
  }
};
