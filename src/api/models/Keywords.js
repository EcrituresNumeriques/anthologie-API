/**
 * Keywords.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'keywords',
  autoPK: false,
  attributes: {
    id_keyword: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    families: {
      collection:'keyword_families',
      via:'keywords'
    },
    category: {
      model:'Keyword_categories'
    },
    id_user: {
      model:'Users'
    },
    id_group: {
      model:'User_Groups'
    },
    versions:{
      collection:'Keyword_versions',
      via:'id_keyword'
    },
    images:{
      collection:'Images',
      via:'keywords',
      dominant:true
    },
    entities:{
      collection:'Entities',
      via:'keywords'
    }
  }
};
