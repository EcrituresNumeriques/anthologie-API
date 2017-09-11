/**
 * ScholiesController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  removeEntity: function (req, res) {
    Scholies.findOne({id_scholie:req.param('parentid')}).populate('entities').exec(function(e,r){
      if(e){return res.badRequest({message:"bad request"})}
      r.entities.remove(req.param('id'))
      r.save()
      res.ok(r);
    });
  },
  deleteTranslation: function (req, res) {
    Scholie_translations.destroy({id_scholie_translation:req.param('id'),id_scholie:req.param('parentid')}).exec(function(err){
      if(err){return res.badRequest({success:false});}
      return res.ok({success:true});
    })
  }};
