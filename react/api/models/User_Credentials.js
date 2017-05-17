/**
 * Credentials.js
 *
 * @description :: List of all way of connecting to the API
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  autoPK:false,
  attributes: {
    id_credential:{
      type:'integer',
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    id_user: {
      model:'Users',
    },
    username_canonical: {
      type: 'string',
      unique: true,
      size: 255
    },
    email_canonical: {
      type: 'email',
      unique: true,
      size: 255
    },
    enabled: {
      type: 'boolean',
      required: true,
      defaultsTo: true
    },
    token: {
      type: 'string',
      required: false,
      size: 255
    },
    salt: {
      type: 'string',
      required: false,
      size: 255
    },
    password: {
      type: 'string',
      required: false,
      size: 255
    },
    last_login: {
      type: 'datetime',
      required: false
    },
    locked: {
      type: 'boolean',
      required: true,
      defaultsTo: false
    },
    expired: {
      type: 'boolean',
      required: true,
      defaultsTo: false
    },
    expires_at: {
      type: 'datetime',
      required: false
    },
    confirmation_token: {
      type: 'string',
      size: 255
    }
  }
};
