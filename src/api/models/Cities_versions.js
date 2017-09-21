/**
 * Cities_versions.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'cities_versions',
  autoPK: false,
  attributes: {
    id_city_version: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    id_city: {
      model:"Cities"
    },
    id_user: {
      model:'Users'
    },
    id_group: {
      model:'User_Groups'
    },
    id_language: {
      model:'Languages'
    },
    name: {
      type: 'string',
      required: false,
      size: 45
    },
    current_name: {
      type: 'string',
      required: false,
      size: 45
    },
    description: {
      type: 'text',
      required: false
    }
  }
};
