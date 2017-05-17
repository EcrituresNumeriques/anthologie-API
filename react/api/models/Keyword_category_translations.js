/**
 * Keywords_categories_translation.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'keywords_categories_translation',
  autoPK: false,
  attributes: {
    id_keyword_category_translations: {
      type: 'integer',
      required: true,
      autoIncrement: true,
      primaryKey: true,
      size: 11
    },
    id_keyword_category: {
      model:'Keyword_categories'
    },
    id_user: {
      model:'Users'
    },
    id_group: {
      model:'User_Groups'
    },
    id_language: {
      model:'Languages'
    },
    label: {
      type: 'string',
      required: false,
      size: 50
    },
    description: {
      type: 'text',
      required: false
    }
  }
};
