/**
 * Notes_translations.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'notes_translations',
  autoPK: false,
  attributes: {
    id_note_translation: {
      type: 'integer',
      required: true,
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    id_note: {
      model:'Notes'
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
    text: {
      type: 'text',
      required: false
    }
  }
};
