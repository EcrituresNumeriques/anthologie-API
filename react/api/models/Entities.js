/**
 * Entities.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'entities',
  autoPK: false,
  attributes: {
    id: {
      type: 'integer',
      required: true,
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    id_book: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    id_era: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    id_genre: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    id_user: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    id_group: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    title: {
      type: 'string',
      required: true,
      size: 45
    },
    date: {
      type: 'integer',
      required: false,
      size: 6
    },
    date_range: {
      type: 'integer',
      required: false,
      size: 6
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
