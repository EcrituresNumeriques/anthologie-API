/**
 * Fos_users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'fos_users',
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
    username: {
      type: 'string',
      required: true,
      size: 255
    },
    username_canonical: {
      type: 'string',
      required: true,
      unique: true,
      size: 255
    },
    email: {
      type: 'string',
      required: true,
      size: 255
    },
    email_canonical: {
      type: 'string',
      required: true,
      unique: true,
      size: 255
    },
    enabled: {
      type: 'integer',
      required: true,
      size: 1
    },
    salt: {
      type: 'string',
      required: true,
      size: 255
    },
    password: {
      type: 'string',
      required: true,
      size: 255
    },
    last_login: {
      type: 'datetime',
      required: false
    },
    locked: {
      type: 'integer',
      required: true,
      size: 1
    },
    expired: {
      type: 'integer',
      required: true,
      size: 1
    },
    expires_at: {
      type: 'datetime',
      required: false
    },
    confirmation_token: {
      type: 'string',
      required: false,
      size: 255
    },
    password_requested_at: {
      type: 'datetime',
      required: false
    },
    roles: {
      type: 'longtext',
      required: true
    },
    credentials_expired: {
      type: 'integer',
      required: true,
      size: 1
    },
    credentials_expire_at: {
      type: 'datetime',
      required: false
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
    }
  }
};