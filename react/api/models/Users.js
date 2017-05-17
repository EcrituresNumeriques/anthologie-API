/**
 * Fos_users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'users',
  autoPK: false,
  attributes: {
    id_user:{
      type:'integer',
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    username: {
      type: 'string',
      required: true,
      size: 255
    },
    email: {
      type: 'email',
      required: true,
      size: 255
    },
    roles: {
      type: 'longtext',
      required: true
    },
    first_name: {
      type: 'string',
      required: false,
      size: 45
    },
    last_name: {
      type: 'string',
      required: false,
      size: 45
    },
    institution: {
      type: 'string',
      required: false,
      size: 45
    },
    country: {
      type: 'string',
      required: false,
      size: 45
    },
    groups:{
      collection:'User_Groups',
      via:'users'
    }
  }
};
