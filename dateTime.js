(function(){

"use strict";

//Name of the macro
exports.name = "dateTime"; 

//Parameters
exports.params = [
	{ name: "format" },
	{ name: "timestamp" }
];

exports.run = function(format, timestamp) {
	if(!timestamp) {
		timestamp = new Date;
	}
	else {
		timestamp = $tw.utils.parseDate(timestamp);
	}
	if(!format)
		//Date+Time format default DD/MM/YYYY - HH/MM/SS
		format = "0DD-0MM-YYYY 0hh:0mm:0ss"; 
	return $tw.utils.formatDateString(timestamp, format); 
};

})();