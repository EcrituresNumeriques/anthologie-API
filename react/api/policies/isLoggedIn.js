/**
 * isLoggedIn
 *
 * @module      :: Policy
 * @description :: Policy to check if a user is logged in or not. Assumes the login Controller set req.session.user
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  if (req.session.user) {
    return next();
  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('You need to be logged in to perform this action.');
};
