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
      primaryKey: true,
      unique:true,
      autoIncrement: true,
      size: 11
    },
    name: {
      type: 'string',
      required: true,
      size: 45
    },
    edition: {
      type: 'string',
      size: 45
    },
    family: {
      type: 'string',
      required: true,
      size: 45
    },
    id_user:{
      model:'Users'
    },
    id_group:{
      model:'User_Groups'
    }
  }
};
