/**
 * Eras_s.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'eras_versions',
  autoPK: false,
  attributes: {
    id_era_version: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    id_era: {
      model:'Eras'
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
    culture_centers: {
      type: 'text',
      required: false
    },
    description: {
      type: 'text',
      required: false
    }
  }
};
