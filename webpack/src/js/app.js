// alert(require('./people.js'));
var people =require('./people.js');
var $ = require("jquery");

require("../css/style.css");
require("../css/master.css");
require("../css/a.css");

$.each(people,function(key,value) {
	$("body").append("<h1>" + people[key].name	  + "</h1>");
});
console.log(people[2].name);
