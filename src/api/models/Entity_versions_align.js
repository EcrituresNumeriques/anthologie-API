/**
 * Entities_s_align.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'entities_versions_align',
  autoPK: false,
  attributes: {
    id_align: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    id_entity:{
      model:'Entities'
    },
    source:{
      model:'Entity_versions'
    },
    source_lang:{
      model:'Languages'
    },
    target:{
      model:'Entity_versions'
    },
    target_lang:{
      model:'Languages'
    },
    json: {
      type: 'json',
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
