/**
 * Keywords_images_assoc.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'keywords_images_assoc',
  autoPK: false,
  attributes: {
    id_keyword: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    id_image: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    }
  }
};
