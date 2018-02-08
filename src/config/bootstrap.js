//var faker = require('faker');

/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {
/* let langs = [], authors = [];

  //add five languages
  let firstFamily = faker.lorem.word(),secondFamily = faker.lorem.word();
  langs.push(Languages.create({name:faker.lorem.words(),family:firstFamily}));
  langs.push(Languages.create({name:faker.lorem.words(),family:firstFamily}));
  langs.push(Languages.create({name:faker.lorem.words(),family:firstFamily}));
  langs.push(Languages.create({name:faker.lorem.words(),family:secondFamily}));
  langs.push(Languages.create({name:faker.lorem.words(),family:secondFamily}));

  Promise.all(langs).then(function(results){
    //lang added, adding some authors
    Authors.create({}).then(function(author){
      author.translations.add({name:faker.name.findName(),id_language:results[0].id_language});
      author.translations.add({name:faker.name.findName(),id_language:results[1].id_language});
      author.translations.add({name:faker.name.findName(),id_language:results[2].id_language});
      author.translations.add({name:faker.name.findName(),id_language:results[3].id_language});
      author.translations.add({name:faker.name.findName(),id_language:results[4].id_language});
      author.save();
      cb();
    }).catch(function(err){console.log(err)});



  });
*/





  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  //Promise.all(authors).then(function(results){cb()});
  cb();

};
