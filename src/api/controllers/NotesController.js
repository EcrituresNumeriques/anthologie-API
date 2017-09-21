/**
 * NotesController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  removeEntity: function (req, res) {
    Notes.findOne({id_note:req.param('parentid')}).populate('entities').exec(function(e,r){
      if(e){return res.badRequest({message:"bad request"})}
      r.entities.remove(req.param('id'))
      r.save()
      res.ok(r);
    });
  },
  deleteVersion: function (req, res) {
    Note_versions.destroy({id_note_version:req.param('id'),id_note:req.param('parentid')}).exec(function(err){
      if(err){return res.badRequest({success:false});}
      return res.ok({success:true});
    })
  }
};
