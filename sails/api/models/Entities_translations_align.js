/**
 * Entities_translations_align.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'entities_translations_align',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    align_id: {
      type: 'integer',
      required: true,
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    pair: {
      type: 'string',
      required: true,
      index: true,
      size: 23
    },
    json: {
      type: 'text',
      required: true
    },
    user_id: {
      type: 'integer',
      required: true,
      size: 11
    },
    group_id: {
      type: 'integer',
      required: false,
      size: 11
    },
    created_at: {
      type: 'date',
      required: true
    },
    modified_at: {
      type: 'date',
      required: true
    }
  }
};