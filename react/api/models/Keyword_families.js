/**
 * Keywords_families.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'keywords_families',
  autoPK: false,
  attributes: {
    id_keyword_family: {
      type: 'integer',
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
    name: {
      type: 'string',
      required: true,
      unique: true,
      size: 45
    },
    keywords:{
      collection:'Keywords',
      via:'families',
      dominant:true
    }
  }
};
