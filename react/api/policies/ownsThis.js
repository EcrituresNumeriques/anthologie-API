/**
 * ownsThis
 *
 * @module      :: Policy
 * @description :: Check if user is either admin or the owner of the item requested
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller

  if (req.session.user && req.session.user.admin) {
    //User is admin, bypass check
    return next();
  }
  else{
    //find model queried
    var Model = req._sails.models[req.options.model];
    //find the instance of the model requested
    Model.findOne(req.params.id).exec(function(err,record){
      if(err){return res.forbidden({message:'Error.'})}
      else if(!record){return res.forbidden({message:'no record found.'})}
      else{
        if(req.session.user && record.id_user === req.session.user.id_user){
          //owns this, pass to the next policy
          next();
        }
        else{return res.forbidden({message:'you do not own this record.'})}
      }
    });
  }
};
