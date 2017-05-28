/**
 * AuthorsController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  deleteFromCollection: function (req, res) {
    Author_translations.destroy({id_author_translation:req.param('id'),id_author:req.param('parentid')}).exec(function(err){
      if(err){return res.badRequest({success:false});}
      return res.ok({success:true});
    })
  }
};
