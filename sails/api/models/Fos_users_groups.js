/**
 * Fos_users_groups.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'fos_users_groups',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    user_id: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    group_id: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    }
  }
};