/**
 * Entities_translations_align.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'entities_translations_align',
  autoPK: false,
  attributes: {
    id_align: {
      type: 'integer',
      required: true,
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    pair: {
      collection:'Entity_translations',
      via:'alignements'
    },
    json: {
      type: 'text',
      required: true
    },
    id_user: {
      model:'Users'
    },
    id_group: {
      model:'User_Groups'
    },
  }
};
