/**
 * Entities_scholies_assoc.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'entities_scholies_assoc',
  autoPK: false,
  attributes: {
    entities_id: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    scholies_id: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    }
  }
};
