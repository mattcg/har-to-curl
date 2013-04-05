/**
 * A CommonJS utility for converting a HAR (HTTP Archive) format JSON object to a cURL command string for use on the command line.
 *
 * @overview
 * @author Matthew Caruana Galizia <m@m.cg>
 * @license MIT
 * @copyright Copyright (c) 2012, Matthew Caruana Galizia
 * @version 0.3.0
 * @preserve
 */

/*jslint node: true */

var harToCurl = function(har) {
	'use strict';
	if (typeof har === 'string') {
		har = JSON.parse(har);
	}

	if (!har || typeof har !== 'object') {
		return;
	}

	if (har.request) {
		return harToCurl.fromEntry(har);
	}

	if (har.log && Array.isArray(har.log.entries)) {
		return harToCurl.fromLog(har.log);
	}

	if (Array.isArray(har)) {
		return harToCurl.fromEntries(har);
	}

	if (Array.isArray(har.entries)) {
		return harToCurl.fromLog(har);
	}
};

harToCurl.fromLog = function(log) {
	'use strict';
	if (!log || !Array.isArray(log.entries)) {
		return;
	}

	return harToCurl.fromEntries(log.entries);
};

harToCurl.fromEntries = function(entries) {
	'use strict';
	return entries.map(harToCurl.fromEntry);
};

harToCurl.fromEntry = function(entry) {
	'use strict';
	var command;

	if (!entry || !entry.request) {
		return '';
	}

	command = 'curl -X ' + entry.request.method;

	if (entry.request.httpVersion === 'HTTP/1.0') {
		command += ' -0';
	}

	if (entry.request.cookies.length) {
		command += ' -b "' + entry.request.cookies.map(function(cookie) {
			return encodeURIComponent(cookie.name) + '=' + encodeURIComponent(cookie.value);
		}).join('&') + '"';
	}

	command += entry.request.headers.map(function(header) {
		return ' -H "' + header.name + ': ' + header.value + '"';
	}).join('');

	if (entry.request.postData) {
		command += ' -d "' + entry.request.postData.text + '"';
	}

	return command + ' ' + entry.request.url;
};
