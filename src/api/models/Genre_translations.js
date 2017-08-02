/**
 * Genres_translations.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'genres_translations',
  autoPK: false,
  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    id_genre: {
      model:'Genres'
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
    title: {
      type: 'string',
      required: true,
      size: 45
    },
    description: {
      type: 'string',
      required: false,
      size: 45
    }
  }
};
