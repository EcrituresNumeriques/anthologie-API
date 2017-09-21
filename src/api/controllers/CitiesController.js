/**
 * CitiesController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  deleteFromCollection: function (req, res) {
    Cities_versions.destroy({id_city_version:req.param('id'),id_city:req.param('parentid')}).exec(function(err){
      if(err){return res.badRequest({success:false});}
      return res.ok({success:true});
    })
  }
};
