var MetalSmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var Hours = require("./hours.json");
var nav = require("./nav.json");
var food = require("./foodmenu.json");

MetalSmith(__dirname)
  .metadata({
    hours: Hours,
    links: nav,
    menu: food
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(markdown())
  .use(layouts({
    default: "base.njk",
    directory: "layouts",
    pattern: ["*", "!*.js", "!*.json", "!*.css", "!./3 pages/contactus.html","!./3 pages/giftcards.html","!./3 pages/privateevents.html","!./3 pages/reservations.html"],
    engine: "nunjucks"
  }))
  .build(function(err){
    if(err) throw err;
  });