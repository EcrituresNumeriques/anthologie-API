/**
 * Authors.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'authors',
  attributes: {
    name: {
      type: 'string',
      required: false,
      size: 128
    },
    city_born_id: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    city_died_id: {
      type: 'integer',
      required: false,
      index: true,
      size: 11
    },
    era_id: {
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
    born: {
      type: 'integer',
      required: false,
      size: 11
    },
    born_range: {
      type: 'integer',
      required: false,
      size: 6
    },
    died: {
      type: 'integer',
      required: false,
      size: 11
    },
    died_range: {
      type: 'integer',
      required: false,
      size: 6
    },
    activity: {
      type: 'integer',
      required: false,
      size: 6
    },
    activity_range: {
      type: 'integer',
      required: false,
      size: 6
    }
  }
};
