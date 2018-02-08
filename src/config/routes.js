/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  // NOTE all routes defined before the 'GET /*' will override

  //Collection management
  'POST /api/v1/cities/:parentid/versions':[{model:"cities"},{policy:'isLoggedIn'},{policy:'populateUserInfos'},{policy:'ownsThis'},{blueprint:'add', model:'cities',alias:'versions'}],
  'DELETE /api/v1/cities/:parentid/versions/:id':'CitiesController.deleteFromCollection',
  //'DELETE /api/v1/cities/:parentid/versions/:id':[{model:"cities"},{policy:'isLoggedIn'},{policy:'populateUserInfos'},{policy:'ownsThis'},{blueprint:'destroy', model:'cities_versions'}],

  'POST /api/v1/authors/:parentid/versions':[{model:"authors"},{policy:'isLoggedIn'},{policy:'populateUserInfos'},{policy:'ownsThis'},{blueprint:'add', model:'authors',alias:'versions'}],
  'DELETE /api/v1/authors/:parentid/versions/:id':'AuthorsController.deleteFromCollection',
  //'DELETE /api/v1/authors/:parentid/versions/:id':[{model:"authors"},{policy:'isLoggedIn'},{policy:'populateUserInfos'},{policy:'ownsThis'},{blueprint:'destroy', model:'author_versions'}],


  'POST /api/v1/entities/:parentid/authors':[{model:"entities"},{policy:'isLoggedIn'},{policy:'populateUserInfos'},{blueprint:'add', model:'entities',alias:'authors'}],
  'POST /api/v1/entities/:parentid/authors/:id':[{model:"entities"},{policy:'isLoggedIn'},{policy:'populateUserInfos'},{blueprint:'add', model:'entities',alias:'authors'}],
  'DELETE /api/v1/entities/:parentid/authors/:id':'EntitiesController.RemoveAuthor',

  'POST /api/v1/entities/:parentid/keywords':[{model:"entities"},{policy:'isLoggedIn'},{policy:'populateUserInfos'},{blueprint:'add', model:'entities',alias:'keywords'}],
  'POST /api/v1/entities/:parentid/keywords/:id':[{model:"entities"},{policy:'isLoggedIn'},{policy:'populateUserInfos'},{blueprint:'add', model:'entities',alias:'keywords'}],
  'DELETE /api/v1/entities/:parentid/keywords/:id':'EntitiesController.RemoveKeyword',

  'POST /api/v1/keywords/:parentid/versions':[{model:"keywords"},{policy:'isLoggedIn'},{policy:'populateUserInfos'},{blueprint:'add', model:'keywords',alias:'versions'}],
  'DELETE /api/v1/keywords/:parentid/versions/:id':'KeywordsController.deleteFromCollection',


  'POST /api/v1/entities/:parentid/uris':[{model:"entities"},{policy:'isLoggedIn'},{policy:'populateUserInfos'},{blueprint:'add', model:'entities',alias:'uris'}],
  'POST /api/v1/entities/:parentid/versions':[{model:"entities"},{policy:'isLoggedIn'},{policy:'populateUserInfos'},{blueprint:'add', model:'entities',alias:'versions'}],
  'DELETE /api/v1/entities/:parentid/uris/:id':'EntitiesController.destroyUri',

  'DELETE /api/v1/entities/:parentid/versions/:id':'EntitiesController.destroyVersion',

  'POST /api/v1/entities/:parentid/drafts':[{model:"entities"},{policy:'isLoggedIn'},{policy:'populateUserInfos'},{blueprint:'add', model:'entities',alias:'drafts'}],
  'DELETE /api/v1/entities/:parentid/drafts/:id':'EntitiesController.destroyDraft',

  //Internal references
  'POST /api/v1/entities/:parentid/internalref/:id':[{model:"entities"},{policy:'isLoggedIn'},{policy:'populateUserInfos'},{blueprint:'add', model:'entities',alias:'internalRef_targets'}],
  'DELETE /api/v1/entities/:parentid/internalref/:id':'EntitiesController.RemoveReference',

  //External references
  'POST /api/v1/entities/:parentid/externalref':[{model:"entities"},{policy:'isLoggedIn'},{policy:'populateUserInfos'},{blueprint:'add', model:'entities',alias:'externalRef'}],
  'DELETE /api/v1/entities/:parentid/externalref/:id':'EntitiesController.destroyReference',

  //drafts
  'GET /api/v1/drafts':'Entity_draftsController.find',
  'GET /api/v1/drafts/:id':'Entity_draftsController.findOne',
  'POST /api/v1/drafts/:id':'Entity_draftsController.update',

  //Authors
  'GET /api/v1/authors':'AuthorsController.find',
  'GET /api/v1/preload-authors':{model:'authors',blueprint:'find',populate:false},
  'POST /api/v1/authors':'AuthorsController.create',
  'GET /api/v1/authors/:id':'AuthorsController.findOne',
  'POST /api/v1/authors/:id':'AuthorsController.update',

  //Users (a supprimer)
  //'GET /api/v1/users':'UsersController.find',
  //'POST /api/v1/users':'UsersController.create',
  //'GET /api/v1/users/:id':'UsersController.findOne',
  'POST /api/v1/users/:id':'UsersController.updateInfos',

  //Credentials (a supprimer)
  //'GET /api/v1/credentials':'User_CredentialsController.find',
  //'POST /api/v1/credentials':'User_CredentialsController.create',
  //'GET /api/v1/credentials/:id':'User_CredentialsController.findOne',
  'POST /api/v1/credentials/password':'User_updateCredentialController.updatePassword',
  'POST /api/v1/credentials/:id':'User_CredentialsController.update',

  //Register
  'POST /api/v1/register':'User_RegisterController.newUser',

  //Login
  'POST /api/v1/login':'User_LoginController.validateLogin',

  //logout user
  'POST /api/v1/logout':'User_LoginController.logout',

  //status
  'GET /api/v1/status':'User_StatusController.status',

  //Books
  'GET /api/v1/books':'BooksController.find',
  'POST /api/v1/books':'BooksController.create',
  'GET /api/v1/books/:id':'BooksController.findOne',
  'POST /api/v1/books/:id':'BooksController.update',

  //Cities
  'GET /api/v1/cities':'CitiesController.find',
  'GET /api/v1/preload-cities':{model:'cities',blueprint:'find',populate:false},
  'POST /api/v1/cities':'CitiesController.create',
  'GET /api/v1/cities/:id':'CitiesController.findOne',
  'POST /api/v1/cities/:id':'CitiesController.update',


  //Entities
  'GET /api/v1/entities':'EntitiesController.find',
  'GET /api/v1/preload-entities':{model:'entities',blueprint:'find',populate:false},
  'POST /api/v1/entities':'EntitiesController.create',
  'GET /api/v1/entities/:id':'EntitiesController.findOne',
  'POST /api/v1/entities/:id':'EntitiesController.update',
  'DELETE /api/v1/entities/:id':'EntitiesController.destroy',

  //Entities alignements
  'GET /api/v1/alignements':'Entity_versions_alignController.find',
  'POST /api/v1/alignements':'Entity_versions_alignController.create',
  'GET /api/v1/alignements/:id':'Entity_versions_alignController.findOne',
  'POST /api/v1/alignements/:id':'Entity_versions_alignController.update',
  'DELETE /api/v1/alignements/:id':'Entity_versions_alignController.destroy',



  //Eras
  'GET /api/v1/areas':'ErasController.find',
  'POST /api/v1/areas':'ErasController.create',
  'GET /api/v1/areas/:id':'ErasController.findOne',
  'POST /api/v1/areas/:id':'ErasController.update',

  //Genres
  'GET /api/v1/genres':'GenresController.find',
  'POST /api/v1/genres':'GenresController.create',
  'GET /api/v1/genres/:id':'GenresController.findOne',
  'POST /api/v1/genres/:id':'GenresController.update',

  //Images
  'GET /api/v1/images':'ImagesController.find',
  'POST /api/v1/images':'ImagesController.create',
  'GET /api/v1/images/:id':'ImagesController.findOne',
  'POST /api/v1/images/:id':'ImagesController.update',

  //Keyword_categories
  'GET /api/v1/keyword_categories':{model:'keyword_categories',blueprint:'find',populate:true},
  'GET /api/v1/preload-keyword_categories':{model:'keyword_categories',blueprint:'find',populate:false},
  'POST /api/v1/keyword_categories':{model:'keyword_categories',blueprint:'create',populate:false},
  'GET /api/v1/keyword_categories/:id':{model:'keyword_categories',blueprint:'findone',populate:false},
  'POST /api/v1/keyword_categories/:id':{model:'keyword_categories',blueprint:'update',populate:false},

  //Keyword_families
  'GET /api/v1/keyword_families':'Keyword_familiesController.find',
  'POST /api/v1/keyword_families':'Keyword_familiesController.create',
  'GET /api/v1/keyword_families/:id':'Keyword_familiesController.findOne',
  'POST /api/v1/keyword_families/:id':'Keyword_familiesController.update',

  //Keywords
  'GET /api/v1/keywords':'KeywordsController.find',
  'GET /api/v1/preload-keywords':{model:'keywords',blueprint:'find',populate:true},
  'POST /api/v1/keywords':'KeywordsController.create',
  'GET /api/v1/keywords/:id':'KeywordsController.findOne',
  'POST /api/v1/keywords/:id':'KeywordsController.update',

  //Languages
  'GET /api/v1/languages':'Languages.find',
  'POST /api/v1/languages':'Languages.create',
  'GET /api/v1/languages/:id':'Languages.findOne',
  'POST /api/v1/languages/:id':'Languages.update',

  //Motifs
  'GET /api/v1/motifs':'MotifsController.find',
  'POST /api/v1/motifs':'MotifsController.create',
  'GET /api/v1/motifs/:id':'MotifsController.findOne',
  'POST /api/v1/motifs/:id':'MotifsController.update',

  //Notes
  'GET /api/v1/notes':'NotesController.find',
  'POST /api/v1/notes':'NotesController.create',
  'GET /api/v1/notes/:id':'NotesController.findOne',
  'POST /api/v1/notes/:id':'NotesController.update',
  'DELETE /api/v1/notes/:id':'NotesController.destroy',
  'POST /api/v1/notes/:parentid/entity/:id':[{model:"notes"},{policy:'isLoggedIn'},{policy:'populateUserInfos'},{blueprint:'add', model:'notes',alias:'entities'}],
  'DELETE /api/v1/notes/:parentid/entity/:id':'NotesController.removeEntity',
  'POST /api/v1/notes/:parentid/versions':[{model:"notes"},{policy:'isLoggedIn'},{policy:'populateUserInfos'},{policy:'ownsThis'},{blueprint:'add', model:'notes',alias:'versions'}],
  'DELETE /api/v1/notes/:parentid/versions/:id':'NotesController.deleteVersion',

  //Note_versions
  'GET /api/v1/noteVersions':{model:'note_versions',blueprint:'find',populate:false},
  'GET /api/v1/noteVersions/:id':{model:'note_versions',blueprint:'findone',populate:false},
  'POST /api/v1/noteVersions/:id':'Note_versionsController.update',

  //Scholies
  'GET /api/v1/scholies':'ScholiesController.find',
  'POST /api/v1/scholies':'ScholiesController.create',
  'GET /api/v1/scholies/:id':'ScholiesController.findOne',
  'POST /api/v1/scholies/:id':'ScholiesController.update',
  'DELETE /api/v1/scholies/:id':'ScholiesController.destroy',
  'POST /api/v1/scholies/:parentid/entity/:id':[{model:"scholies"},{policy:'isLoggedIn'},{policy:'populateUserInfos'},{blueprint:'add', model:'scholies',alias:'entities'}],
  'DELETE /api/v1/scholies/:parentid/entity/:id':'ScholiesController.removeEntity',
  'POST /api/v1/scholies/:parentid/versions':[{model:"scholies"},{policy:'isLoggedIn'},{policy:'populateUserInfos'},{policy:'ownsThis'},{blueprint:'add', model:'scholies',alias:'versions'}],
  'DELETE /api/v1/scholies/:parentid/versions/:id':'ScholiesController.deleteVersion',

  //scholie_versions
  'GET /api/v1/scholieVersions':{model:'scholie_versions',blueprint:'findone',populate:false},
  'GET /api/v1/scholieVersions/:id':{model:'scholie_versions',blueprint:'findone',populate:false},
  'POST /api/v1/scholieVersions/:id':'Scholie_versionsController.update',

  //URI_source (who provides the URI, ex: perseus)
  'GET /api/v1/authorities':'URI_sourceController.find',
  'POST /api/v1/authorities':'URI_sourceController.create',
  'GET /api/v1/authorities/:id':'URI_sourceController.findOne',
  'POST /api/v1/authorities/:id':'URI_sourceController.update',

  //URId_categories (ex: 'source', 'revised', 'version', not sure if we want to keep it)
  'GET /api/v1/uris_categories':'URId_categoriesController.find',
  'POST /api/v1/uris_categories':'URId_categoriesController.create',
  'GET /api/v1/uris_categories/:id':'URId_categoriesController.findOne',
  'POST /api/v1/uris_categories/:id':'URId_categoriesController.update',

  //URId (uri in itself)
  'GET /api/v1/uris':'URIdController.find',
  'GET /api/v1/uris/:value':'URIdController.find',
  'POST /api/v1/uris':'URIdController.create',
  'GET /api/v1/uris/:id':'URIdController.findOne',
  'POST /api/v1/uris/:id':'URIdController.update',

  //Get all Contributions
  'GET /api/v1/contrib/entities':'ContribController.entities',
  'GET /api/v1/contrib/versions':'ContribController.versions',
  'GET /api/v1/contrib/aligns':'ContribController.aligns',
  'GET /api/v1/contrib/scholies':'ContribController.scholies',
  'GET /api/v1/contrib/notes':'ContribController.notes',

  //Get users
  'GET /api/v1/users':'UsersController.listNames',

  // All GET requests are directed to the app controller which renders our app.
  'GET /*': {
    controller: 'AppController',
    action: 'index',
    skipAssets: true,
  },

};
