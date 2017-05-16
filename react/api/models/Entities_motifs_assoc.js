/**
 * Entities_motifs_assoc.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'entities_motifs_assoc',
  autoPK: false,
  attributes: {
    entities_id: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    motifs_id: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    }
  }
};
