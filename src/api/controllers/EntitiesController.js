/**
 * EntitiesController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  RemoveAuthor: function (req, res) {
    Entities.findOne({id_entity:req.param('parentid')}).populate('authors').exec(function(e,r){
      if(e){return res.badRequest({message:"bad request"})}
      r.authors.remove(req.param('id'))
      r.save()
      res.ok(r);
    });
  },
  RemoveKeyword: function (req, res) {
    Entities.findOne({id_entity:req.param('parentid')}).populate('keywords').exec(function(e,r){
      if(e){return res.badRequest({message:"bad request"})}
      r.keywords.remove(req.param('id'))
      r.save()
      res.ok(r);
    });
  },
  RemoveReference: function (req, res) {
    Entities.findOne({id_entity:req.param('parentid')}).populate('internalRef_targets').exec(function(e,r){
      if(e){return res.badRequest({message:"bad request"})}
      r.internalRef_targets.remove(req.param('id'))
      r.save()
      res.ok(r);
    });
  },
  destroyUri : function (req,res){
    URId.destroy({id_urid:req.param('id'),id_entity:req.param('parentid')}).exec(function(err){
      if(err){return res.badRequest({success:false});}
      return res.ok({success:true});
    })
  },
  destroyTranslation : function (req,res){
    Entity_translations.destroy({id_entity_translation:req.param('id'),id_entity:req.param('parentid')}).exec(function(err){
      if(err){return res.badRequest({success:false});}
      return res.ok({success:true});
    })
  },
  destroyDraft : function (req,res){
    Entity_drafts.destroy({id_entity_draft:req.param('id'),id_entity:req.param('parentid')}).exec(function(err){
      if(err){return res.badRequest({success:false});}
      return res.ok({success:true});
    })
  },
  destroyReference : function (req,res){
    Entity_externalRefs.destroy({id_entity_external:req.param('id'),id_entity:req.param('parentid')}).exec(function(err){
      if(err){return res.badRequest({success:false});}
      return res.ok({success:true});
    })
  }

};
