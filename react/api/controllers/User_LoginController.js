/**
 * UsersController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
const bcrypt = require('bcrypt');

module.exports = {
  validateLogin: function(req,res){
      let email = req.body.email || req.query.email || '';
      let password = req.body.password || req.query.password || '';
      User_Credentials.findOne({email:email}).then(function(thisUser){
          if(bcrypt.compareSync(password,_.get(thisUser,'password','nops'))){
              Users.findOne({id_user:thisUser.id_user}).exec(function(err,response){
                res.ok(response);
              })
            }
            else{
              res.badRequest({'humanReadable':'email or password invalid'});
            }
        });
  }
};
