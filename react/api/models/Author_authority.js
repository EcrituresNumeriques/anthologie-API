/**
 * Authors_authority.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'author_authority',
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
      model:"Authors"
    },
    URI: {
      type: 'string',
      required: false,
      size: 256
    }
  }
};
