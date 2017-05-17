/**
 * Texts_translations.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'texts_translations',
  autoPK: false,
  attributes: {
    id_text_translation: {
      type: 'integer',
      required: true,
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    id_text: {
      model:'Texts'
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
    editor: {
      type: 'string',
      required: false,
      size: 45
    },
    sound_url: {
      type: 'string',
      required: false,
      size: 255
    },
    text: {
      type: 'text',
      required: true
    }
  }
};
