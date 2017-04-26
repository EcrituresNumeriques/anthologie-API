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

  if (req.session.user.isAdmin) {
    return next();
  }
  else{
    // Use existing req.options.where, or initialize it to an empty object
    req.options.where = req.options.where || {};
    // Set the default `userId` for "find" and "update" blueprints
    req.options.where.id_user = req.session.user.id;
    next();
  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('You need to be logged in to perform this action.');
};
