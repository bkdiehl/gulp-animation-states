'use strict';

var gutil = require('gulp-util'),
	path = require('path'),
	through = require('through2'),
	fs = require('fs')
	;

String.prototype.toCamelCase = function() {
	// remove all characters that should not be in a variable name
	// as well underscores an numbers from the beginning of the string
	var s = this.replace(/([^a-zA-Z0-9_\- ])|^[_0-9]+/g, "").trim().toLowerCase();
	// uppercase letters preceeded by a hyphen or a space
	s = s.replace(/([ -]+)([a-zA-Z0-9])/g, function(a,b,c) {
		return c.toUpperCase();
	});
	// uppercase letters following numbers
	s = s.replace(/([0-9]+)([a-zA-Z])/g, function(a,b,c) {
		return b + c.toUpperCase();
	});
	return s;
};

var	PluginError = gutil.PluginError;
var PLUGIN_NAME = 'gulp-animation-states';

function statesBuilder(dir, bool, options) {
	return through.obj(function(file, encoding, cb) {

		var fileName,
			fileContents,
			selector,
			match = {},
			contents;

		if(dir === undefined || dir === null) dir = path.dirname(file.path) + '/';
		
		//check if user wants to initiate snap-animation-states plugin automatically
		if(bool === undefined || bool == null) bool = false;

		if(path.extname(file.path) == '.svg') {
			//get file name for comparison
			fileName = path.basename(file.path, '.svg');
			selector = '.' + fileName;
			match.path = dir + fileName + '.js';
			match.exists = fs.existsSync(match.path);
	
			if(match.exists) contents = fs.readFileSync(match.path, 'utf8');		
			if(match.exists && contents.length > 0) {
				eval("match.contents = " + contents);
				fileContents = match.contents;
				fileContents.selector = selector;
				fileContents.svg = String(file.contents);
			} else {
				fileContents = {
					selector: selector,
					svg: String(file.contents)
				};
			}

		} 

		//if there is no svg file but instead a js file that contains the svg already
		else if(path.extname(file.path) == '.js') {
			fileName = path.basename(file.path, '.js');
			selector = '.' + fileName;

			match.path = dir + fileName + '.svg';
			match.exists = fs.existsSync(match.path);

			if(!match.exists) {
				eval("fileContents = " + (String(file.contents)));
				fileContents.selector = selector;
			} else fileContents = null;	
		}

		if(fileContents === null) {
			contents = "";
		} else {
			var	name = fileName.toCamelCase(),
				bucket = "var " +  name + " = " + JSON.stringify(fileContents) + ";",
				initPlugin = "SnapStates(" + name + ");";
				
			contents = bucket;
			if(!bool) contents += "\n" + initPlugin;
		}

		file.contents = new Buffer(contents);
			
		this.push(file);
		cb();

	});

}

module.exports = statesBuilder;