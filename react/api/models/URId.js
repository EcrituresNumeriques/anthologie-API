/**
 * URId.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'URId',
  autoPK: false,
  attributes: {
    id: {
      type: 'integer',
      required: true,
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    id_entity: {
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
    id_urid_category: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    id_urid_source: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    value: {
      type: 'string',
      required: false,
      size: 255
    },
    URN: {
      type: 'string',
      required: false,
      size: 128
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
