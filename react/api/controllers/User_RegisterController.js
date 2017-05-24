/**
 * UsersController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  newUser: function(req,res){
    let request = req.query;
    let result = res;
    if(!request.password){
      result.badRequest('you need to specify a password');
    }
    else if(!request.username){
      result.badRequest('you need to specify a username');
    }
    else if(!request.email){
      result.badRequest('you need to specify an email');
    }
    else{
      User_Credentials.create(request).exec(function(err,thisCredential){
        if(err){result.badRequest(err)}
        //Credentials are validated
        let contextCredential = thisCredential;
        request.displayName = request.displayName || request.username;
        Users.create(request).exec(function(err,thisUser){
          if(err){result.badRequest(err)}
          //console.log(thisUser,contextCredential);
          //User is created
          contextCredential.id_user = thisUser.id_user;
          contextCredential.save();
          result.ok(thisUser);
        })
      });
    }
  }
};
