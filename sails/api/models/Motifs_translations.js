/**
 * Motifs_translations.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'motifs_translations',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id: {
      type: 'integer',
      required: true,
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    motif_id: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    user_id: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    group_id: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    language_id: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    title: {
      type: 'string',
      required: false,
      size: 45
    },
    description: {
      type: 'text',
      required: false
    },
    deleted_at: {
      type: 'datetime',
      required: false
    },
    created_at: {
      type: 'datetime',
      required: false
    },
    updated_at: {
      type: 'datetime',
      required: false
    }
  }
};