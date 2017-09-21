/**
 * ContribController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  entities: function (req, res) {
    Entities.find({id_user:req.session.user.id_user}).exec(function(err,entities){
      if (err) {return res.serverError(err);}
      res.json(entities);
    })
  },
  versions: function (req, res) {
    Entity_versions.find({id_user:req.session.user.id_user}).exec(function(err,versions){
      if (err) {return res.serverError(err);}
      res.json(versions);
    })
  },
  aligns: function (req, res) {
    Entity_versions_align.find({id_user:req.session.user.id_user}).exec(function(err,aligns){
      if (err) {return res.serverError(err);}
      res.json(aligns);
    })
  },
  scholies: function (req, res) {
    Scholies.find({id_user:req.session.user.id_user}).exec(function(err,scholies){
      if (err) {return res.serverError(err);}
      res.json(scholies);
    })
  },
  notes: function (req, res) {
    Notes.find({id_user:req.session.user.id_user}).exec(function(err,notes){
      if (err) {return res.serverError(err);}
      res.json(notes);
    })
  }
};
