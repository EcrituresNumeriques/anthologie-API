module.exports = {
  index: function (req, res) {

    var bundle;

    if (sails.config.environment === 'production') {
      bundle = require('../../assets.json').main.js;
      console.log(bundle);
    }

    let currentPath = req.url;
    let title = "404";
    if(/^\/?/.test(currentPath)){
      title = "Home"
    }
    if(/^\/authors/.test(currentPath)){
      title = "Authors"
    }
    else if(/^\/entities/.test(currentPath)){
      title = "Entities"
    }
    else if(/^\/keywords/.test(currentPath)){
      title = "Keywords"
    }
    else if(/^\/languages/.test(currentPath)){
      title = "Languages"
    }
    else if(/^\/users/.test(currentPath)){
      title = "Users"
    }

    return res.view('index', {
      title: title,
      bundle: bundle,
    });
  },
};
