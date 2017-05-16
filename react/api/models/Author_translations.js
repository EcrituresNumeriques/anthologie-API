/**
 * Author_translations.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'author_translations',
  autoPK: false,
  attributes: {
    id_author_translation: {
      type: 'integer',
      required: true,
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    id_author: {
      model:'Authors'
    },
    id_user: {
      model:'Users'
    },
    id_group: {
      model:'Groups'
    },
    language_id: {
      model:'Languages'
    },
    name: {
      type: 'string',
      required: true,
      size: 45
    },
    about: {
      type: 'text',
      required: false
    }
  }
};
