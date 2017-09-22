/**
 * KeywordsController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  deleteFromCollection: function (req, res) {
    Keyword_versions.destroy({id:req.param('id'),id_keyword:req.param('parentid')}).exec(function(err){
      if(err){return res.badRequest({success:false});}
      return res.ok({success:true});
    })
  }
};
