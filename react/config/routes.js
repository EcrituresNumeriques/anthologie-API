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
  'POST /api/v1/cities/:parentid/translations':[{model:"cities"},{policy:'isLoggedIn'},{policy:'populateUserInfos'},{policy:'ownsThis'},{blueprint:'add', model:'cities',alias:'translations'}],
  'DELETE /api/v1/cities/:parentid/translations/:id':'CitiesController.deleteFromCollection',
  //'DELETE /api/v1/cities/:parentid/translations/:id':[{model:"cities"},{policy:'isLoggedIn'},{policy:'populateUserInfos'},{policy:'ownsThis'},{blueprint:'destroy', model:'cities_translations'}],

  'POST /api/v1/authors/:parentid/translations':[{model:"authors"},{policy:'isLoggedIn'},{policy:'populateUserInfos'},{policy:'ownsThis'},{blueprint:'add', model:'authors',alias:'translations'}],
  'DELETE /api/v1/authors/:parentid/translations/:id':'AuthorsController.deleteFromCollection',
  //'DELETE /api/v1/authors/:parentid/translations/:id':[{model:"authors"},{policy:'isLoggedIn'},{policy:'populateUserInfos'},{policy:'ownsThis'},{blueprint:'destroy', model:'author_translations'}],





  //Authors
  'GET /api/v1/authors':'AuthorsController.find',
  'POST /api/v1/authors':'AuthorsController.create',
  'GET /api/v1/authors/:id':'AuthorsController.findOne',
  'POST /api/v1/authors/:id':'AuthorsController.update',

  //Users (a supprimer)
  //'GET /api/v1/users':'UsersController.find',
  //'POST /api/v1/users':'UsersController.create',
  //'GET /api/v1/users/:id':'UsersController.findOne',
  'POST /api/v1/users/:id':'UsersController.update',

  //Credentials (a supprimer)
  //'GET /api/v1/credentials':'User_CredentialsController.find',
  //'POST /api/v1/credentials':'User_CredentialsController.create',
  //'GET /api/v1/credentials/:id':'User_CredentialsController.findOne',
  'POST /api/v1/credentials/:id':'User_CredentialsController.update',

  //Register
  'POST /api/v1/register':'User_RegisterController.newUser',

  //Login
  'POST /api/v1/login':'User_LoginController.validateLogin',

  //status
  'GET /api/v1/status':'User_StatusController.status',

  //Books
  'GET /api/v1/books':'BooksController.find',
  'POST /api/v1/books':'BooksController.create',
  'GET /api/v1/books/:id':'BooksController.findOne',
  'POST /api/v1/books/:id':'BooksController.update',

  //Cities
  'GET /api/v1/cities':'CitiesController.find',
  'POST /api/v1/cities':'CitiesController.create',
  'GET /api/v1/cities/:id':'CitiesController.findOne',
  'POST /api/v1/cities/:id':'CitiesController.update',


  //Entities
  'GET /api/v1/entities':'EntitiesController.find',
  'POST /api/v1/entities':'EntitiesController.create',
  'GET /api/v1/entities/:id':'EntitiesController.findOne',
  'POST /api/v1/entities/:id':'EntitiesController.update',

  //Eras
  'GET /api/v1/':'ErasController.find',
  'POST /api/v1/':'ErasController.create',
  'GET /api/v1//:id':'ErasController.findOne',
  'POST /api/v1//:id':'ErasController.update',

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
  'GET /api/v1/keyword_categories':'Keyword_categoriesController.find',
  'POST /api/v1/keyword_categories':'Keyword_categoriesController.create',
  'GET /api/v1/keyword_categories/:id':'Keyword_categoriesController.findOne',
  'POST /api/v1/keyword_categories/:id':'Keyword_categoriesController.update',

  //Keyword_families
  'GET /api/v1/keyword_families':'Keyword_familiesController.find',
  'POST /api/v1/keyword_families':'Keyword_familiesController.create',
  'GET /api/v1/keyword_families/:id':'Keyword_familiesController.findOne',
  'POST /api/v1/keyword_families/:id':'Keyword_familiesController.update',

  //Keywords
  'GET /api/v1/keywords':'KeywordsController.find',
  'POST /api/v1/keywords':'KeywordsController.create',
  'GET /api/v1/keywords/:id':'KeywordsController.findOne',
  'POST /api/v1/keywords/:id':'KeywordsController.update',

  //Languages
  'GET /api/v1/languages':'Languages.find',
  'POST /api/v1/languages':'Languages.create',
  'GET /api/v1/languages/:id':'Languages.findOne',
  'POST /api/v1/languages/:id':'Languages.update',

  //Manuscripts
  'GET /api/v1/manuscripts':'ManuscriptsController.find',
  'POST /api/v1/manuscripts':'ManuscriptsController.create',
  'GET /api/v1/manuscripts/:id':'ManuscriptsController.findOne',
  'POST /api/v1/manuscripts/:id':'ManuscriptsController.update',

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

  //Scholies
  'GET /api/v1/scholies':'ScholiesController.find',
  'POST /api/v1/scholies':'ScholiesController.create',
  'GET /api/v1/scholies/:id':'ScholiesController.findOne',
  'POST /api/v1/scholies/:id':'ScholiesController.update',

  //Texts
  'GET /api/v1/texts':'TextsController.find',
  'POST /api/v1/texts':'TextsController.create',
  'GET /api/v1/texts/:id':'TextsController.findOne',
  'POST /api/v1/texts/:id':'TextsController.update',

  //URI_source (who provides the URI, ex: perseus)
  'GET /api/v1/authorities':'URI_sourceController.find',
  'POST /api/v1/authorities':'URI_sourceController.create',
  'GET /api/v1/authorities/:id':'URI_sourceController.findOne',
  'POST /api/v1/authorities/:id':'URI_sourceController.update',

  //URId_categories (ex: 'source', 'revised', 'translation', not sure if we want to keep it)
  'GET /api/v1/uris_categories':'URId_categoriesController.find',
  'POST /api/v1/uris_categories':'URId_categoriesController.create',
  'GET /api/v1/uris_categories/:id':'URId_categoriesController.findOne',
  'POST /api/v1/uris_categories/:id':'URId_categoriesController.update',

  //URId (uri in itself)
  'GET /api/v1/uris':'URIdController.find',
  'POST /api/v1/uris':'URIdController.create',
  'GET /api/v1/uris/:id':'URIdController.findOne',
  'POST /api/v1/uris/:id':'URIdController.update',

  // All GET requests are directed to the app controller which renders our app.
  'GET /*': {
    controller: 'AppController',
    action: 'index',
    skipAssets: true,
  },

};
