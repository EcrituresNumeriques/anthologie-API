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
    id: {
      type: 'integer',
      required: true,
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    id_text: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    id_user: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    id_group: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    id_language: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
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
    },
    deleted_at: {
      type: 'datetime',
      required: false
    },
    created_at: {
      type: 'datetime',
      required: false
    },
    updated_at: {
      type: 'datetime',
      required: false
    }
  }
};
