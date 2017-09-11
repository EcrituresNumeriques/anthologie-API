/**
 * UsersController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  listNames: function(req,res){
    Users.find().exec(function (err, users){
      if (err) { return res.serverError(err);}
      users.forEach(
        function(u){
          delete u.admin;
          delete u.roles;
          delete u.first_name;
          delete u.last_name;
          delete u.country;
          delete u.createdAt;
          delete u.updatedAt;
        }
      );
      return res.json(users);
    });
  }
};
