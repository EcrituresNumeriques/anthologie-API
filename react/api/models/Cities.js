/**
 * Cities.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'cities',
  autoPK: false,
  attributes: {
    id_city: {
      type: 'integer',
      required: true,
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    id_user: {
      model:'Users'
    },
    id_group: {
      model:'User_Groups'
    },
    GPS: {
      type: 'string',
      required: false,
      size: 45
    },
    images: {
      collection:'Images',
      via:'cities',
      dominant:true
    },
    translations: {
      collection:'Cities_translations',
      via: 'id_city'
    }
  }
};
