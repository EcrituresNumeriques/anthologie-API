/**
 * Motifs.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'motifs',
  autoPK: false,
  attributes: {
    id_motif: {
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
    versions:{
      collection:'Motif_versions',
      via:'id_motif'
    },
    id_entity:{
      model:'Entities'
    }
  }
};
