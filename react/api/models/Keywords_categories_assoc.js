/**
 * Keywords_categories_assoc.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'keywords_categories_assoc',
  autoPK: false,
  attributes: {
    keywords_id: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    keywords_categories_id: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    }
  }
};
