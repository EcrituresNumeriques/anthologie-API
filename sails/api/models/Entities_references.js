/**
 * Entities_references.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'entities_references',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    source: {
      type: 'integer',
      required: true,
      size: 11
    },
    destination: {
      type: 'integer',
      required: true,
      size: 11
    }
  }
};