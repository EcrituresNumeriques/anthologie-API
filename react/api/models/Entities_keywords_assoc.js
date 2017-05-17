/**
 * Entities_keywords_assoc.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'entities_keywords_assoc',
  autoPK: false,
  attributes: {
    id_entity: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    id_keyword: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    }
  }
};
