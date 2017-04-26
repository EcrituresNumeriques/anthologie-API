/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  if (req.session.user) {

    // Use existing req.options.values, or initialize it to an empty object
    req.options.values = req.options.values || {};

    // Set the default `name` for "create" and "updates" blueprints
    req.options.values.id_user = req.session.user.id;
    req.options.values.id_group = req.session.user.activeGroup;

  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('You need to be logged in to perform this action.');
};
