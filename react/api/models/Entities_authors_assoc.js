/**
 * Entities_authors_assoc.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'entities_authors_assoc',
  autoPK: false,
  attributes: {
    id_entity: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    id_author: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    }
  }
};
