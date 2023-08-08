/**
 * HAR to cURL: a CommonJS utility for converting a HAR (HTTP Archive) format JSON object to a cURL command string for use on the command line.
 *
 * @author Matthew Caruana Galizia <mattcg@gmail.com>
 * @license MIT license
 * @copyright Copyright (c) 2012, Matthew Caruana Galizia
 * @version 0.4.1
 * @preserve
 */

/*jshint node: true */

'use strict';

module.exports = harToCurl;

function harToCurl(har) {
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
}

harToCurl.fromLog = function(log) {
	if (!log || !Array.isArray(log.entries)) {
		return;
	}

	return harToCurl.fromEntries(log.entries);
};

harToCurl.fromEntries = function(entries) {
	return entries.map(harToCurl.fromEntry);
};

harToCurl.fromEntry = function(entry) {
	var command, request;

	if (!entry || !entry.request) {
		return '';
	}

	request = entry.request;
	command = 'curl -X ' + request.method;

	if (request.httpVersion === 'HTTP/1.0') {
		command += ' -0';
	}

	if (request.cookies.length) {
		command += ' -b "' + request.cookies.map(function(cookie) {
			return encodeURIComponent(cookie.name) + '=' + encodeURIComponent(cookie.value);
		}).join('&') + '"';
	}

	command += request.headers.map(function(header) {
		return ' -H "' + header.name + ': ' + header.value + '"';
	}).join('');

	if (request.postData) {
		if (request.postData.text) {
			command += ' -d "' + request.postData.text + '"';
		} else if (request.postData.params && request.postData.params.length > 0) {
			command += ' -d "' + request.postData.params.map(function(param) {
				return param.name + '=' + param.value;
			}).join('&') + '"';
		}
	}

	return command + ' ' + request.url;
};
