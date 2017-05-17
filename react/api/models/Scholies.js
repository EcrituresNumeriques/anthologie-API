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
      required: true,
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
    manuscript:{
      model:'Manuscripts'
    },
    translations:{
      collection:'Scholie_translations',
      via:"id_scholie"
    },
    images:{
      collection:'Images',
      via:'scholies',
      dominant:true
    }
  }
};
