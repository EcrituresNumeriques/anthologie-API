/**
 * Manuscripts.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'manuscripts',
  autoPK: false,
  attributes: {
    id_manuscript: {
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
    translations:{
      collection:'Manuscript_translations',
      via:'id_manuscript'
    },
    images:{
      collection:'Images',
      via:"manuscripts",
      dominant:true
    },
    scholies:{
      collection:'Scholies',
      via:"manuscript",
      dominant:true
    }
  }
};
