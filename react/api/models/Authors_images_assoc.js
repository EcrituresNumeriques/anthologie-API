/**
 * Authors_images_assoc.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'authors_images_assoc',
  autoPK: false,
  attributes: {
    author_id: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    image_id: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    }
  }
};
