/**
 * Languages.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'languages',
  autoPK: false,
  attributes: {
    id_language: {
      type: 'integer',
      required: true,
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    name: {
      type: 'string',
      required: true,
      unique: true,
      size: 45
    },
    family: {
      type: 'string',
      required: true,
      size: 45
    }
  }
};
