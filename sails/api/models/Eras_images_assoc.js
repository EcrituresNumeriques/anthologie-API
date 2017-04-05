/**
 * Eras_images_assoc.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'eras_images_assoc',
  autoCreatedAt: false,
  autoUpdatedAt: false,
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