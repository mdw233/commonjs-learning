//alert("bout to load");

var Validation = require("./validation");
var x = new Validation();
console.log(x);

var J = require("jquery");
console.log(J);

var Formatters = require("./formatters");
console.log("Formatters", Formatters);

//var User = require("./user.js");

var ABC = require("./templates/abc.html");
console.log(ABC);

document.body.innerText = ABC;

var PluginTarget = require("./plugin-target");
console.log("PluginTarget", PluginTarget);