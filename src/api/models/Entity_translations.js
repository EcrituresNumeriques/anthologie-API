/**
 * Entities_translations.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'entities_translations',
  autoPK: false,
  attributes: {
    id_entity_translation: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    alignements_source:{
      collection:'Entity_translations_align',
      via:'source'
    },
    alignements_target:{
      collection:'Entity_translations_align',
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
    }
  }
};
