/**
 * NotesController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  removeEntity: function (req, res) {
    Notes.findOne({id_entity:req.param('parentid')}).populate('entities').exec(function(e,r){
      if(e){return res.badRequest({message:"bad request"})}
      r.entities.remove(req.param('id'))
      r.save()
      res.ok(r);
    });
  },
  deleteTranslation: function (req, res) {
    Note_translations.destroy({id_note_translation:req.param('id'),id_note:req.param('parentid')}).exec(function(err){
      if(err){return res.badRequest({success:false});}
      return res.ok({success:true});
    })
  }
};
