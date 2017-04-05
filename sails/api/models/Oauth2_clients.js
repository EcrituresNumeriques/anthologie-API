/**
 * Oauth2_clients.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'oauth2_clients',
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
    random_id: {
      type: 'string',
      required: true,
      size: 255
    },
    redirect_uris: {
      type: 'longtext',
      required: true
    },
    secret: {
      type: 'string',
      required: true,
      size: 255
    },
    allowed_grant_types: {
      type: 'longtext',
      required: true
    }
  }
};