/**
 * Author_versions.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'author_versions',
  autoPK: false,
  attributes: {
    id_author_version: {
      type: 'integer',
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
      model:'User_Groups'
    },
    id_language: {
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
