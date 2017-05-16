/**
 * Authors_authority.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'authors_authority',
  autoPK: false,
  attributes: {
    id_author_authority: {
      type: 'integer',
      required: true,
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    id_author: {
      type: 'integer',
      required: true,
      size: 11
    },
    URI: {
      type: 'string',
      required: false,
      size: 256
    }
  }
};
