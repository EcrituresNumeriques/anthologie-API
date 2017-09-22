/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your controllers.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file (e.g. `api/policies/authenticated.js`) can be accessed
 * below by its filename, minus the extension, (e.g. "authenticated")
 *
 * For more information on how policies work, see:
 * http://sailsjs.org/#!/documentation/concepts/Policies
 *
 * For more information on configuring policies, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.policies.html
 */


module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions (`true` allows public     *
  * access)                                                                  *
  *                                                                          *
  ***************************************************************************/

  '*': false,


  AppController:{
    '*':true
  },
  EntitiesController:{
    'find':true,
    'findOne':true,
    'create':['isLoggedIn','populateUserInfos'],
    'update':['isLoggedIn','ownsThis'],
    'RemoveAuthor':['isLoggedIn','ownsThis'],
    'RemoveKeyword':['isLoggedIn','ownsThis'],
    'RemoveReference':['isLoggedIn','ownsThis'],
    'destroyUri':['isLoggedIn','ownsThis'],
    'destroyVersion':['isLoggedIn','ownsThis'],
    'destroyDraft':['isLoggedIn','ownsThis'],
    'destroyReference':['isLoggedIn','ownsThis'],
    'destroy':['isLoggedIn','isAdmin'],
  },
  Entity_draftsController:{
    'find':true,
    'findOne':true,
    'update':['isLoggedIn','ownsThis'],
  },
  KeywordsController:{
    'find':true,
    'findOne':true,
    'create':['isLoggedIn','populateUserInfos'],
    'update':['isLoggedIn','ownsThis'],
  },
  AuthorsController:{
    'find':true,
    'findOne':true,
    'create':['isLoggedIn','populateUserInfos'],
    'update':['isLoggedIn','ownsThis'],
    //'deleteFromCollection':['isLoggedIn','ownsThis'],
  },
  CitiesController:{
    'find':true,
    'findOne':true,
    'create':['isLoggedIn','populateUserInfos'],
    'update':['isLoggedIn','ownsThis'],
    'deleteFromCollection':['isLoggedIn','ownsThis'],
  },
  NotesController:{
    'find':true,
    'findOne':true,
    'create':['isLoggedIn','populateUserInfos'],
    'update':['isLoggedIn','ownsThis'],
    'destroy':['isLoggedIn','isAdmin'],
    'removeEntity':['isLoggedIn','ownsThis'],
    'deleteVersion':['isLoggedIn','ownsThis'],
    //'deleteFromCollection':['isLoggedIn','ownsThis'],
  },
  Note_versionsController:{
    'find':true,
    'findOne':true,
    'update':['isLoggedIn','ownsThis'],
  },
  ScholiesController:{
    'find':true,
    'findOne':true,
    'create':['isLoggedIn','populateUserInfos'],
    'update':['isLoggedIn','ownsThis'],
    'destroy':['isLoggedIn','isAdmin'],
    'removeEntity':['isLoggedIn','ownsThis'],
    'deleteVersion':['isLoggedIn','ownsThis'],
    //'deleteFromCollection':['isLoggedIn','ownsThis'],
  },
  Scholie_versionsController:{
    'find':true,
    'findOne':true,
    'update':['isLoggedIn','ownsThis'],
  },
  LanguagesController:{
    'find':true,
    'findOne':true,
    'create':['isLoggedIn','isAdmin','populateUserInfos'],
    'update':['isLoggedIn','isAdmin','ownsThis']
  },
  Entity_versions_alignController:{
    'find':true,
    'findOne':true,
    'create':['isLoggedIn','populateUserInfos'],
    'update':['isLoggedIn','ownsThis'],
    'destroy':['isLoggedIn','ownsThis']
  },
  User_RegisterController:{
    'newUser':true,
  },
  User_LoginController:{
    'validateLogin':true,
    'logout':['isLoggedIn']
  },
  User_StatusController:{
    'status':true
  },
  User_CredentialsController:{
    'update':['isLoggedIn','ownsThis']
  },
  URI_sourceController:{
    find:true,
  },
  URIdController:{
    'find':true,
    'create':['isLoggedIn','populateUserInfos'],
    'update':['isLoggedIn','ownsThis'],
    'destroy':['isLoggedIn','ownsThis']
  },
  ContribController:{
    'entities':['isLoggedIn'],
    'versions':['isLoggedIn'],
    'aligns':['isLoggedIn'],
    'scholies':['isLoggedIn'],
    'notes':['isLoggedIn'],
  },
  User_updateCredentialController:{
    updatePassword:['isLoggedIn']
  },
  ImagesController:{
    'find':true,
    'findOne':true,
    'create':['isLoggedIn','populateUserInfos'],
    'update':['isLoggedIn','ownsThis'],
    'destroy':['isLoggedIn','ownsThis']
  },
  UsersController:{
    'listNames':true,
    'updateInfos':['isLoggedIn','ownsThis','protectAdmin']
  },
  Keyword_Categories:{
    'find':true,
    'findOne':true,
    'create':['isLoggedIn','isAdmin','populateUserInfos'],
    'update':['isLoggedIn','isAdmin','ownsThis']
  }

};
