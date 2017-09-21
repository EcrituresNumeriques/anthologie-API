/**
 * Scholies.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'scholies',
  autoPK: false,
  attributes: {
    id_scholie: {
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
      collection:'Scholie_versions',
      via:"id_scholie"
    },
    title:{
      type:'string',
      size:64
    },
    entities:{
      collection:'Entities',
      via:'scholies',
      dominant:true
    },
    images:{
      collection:'images',
      via:'scholies',
      dominant:true
    }
  }
};
