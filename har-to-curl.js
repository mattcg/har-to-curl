module.exports = function(har) {
	'use strict';

	var command = 'curl';

	command += ' -X ' + har.request.method;

	if (har.request.httpVersion === 'HTTP/1.0') {
		command += ' -0';
	}

	if (har.request.cookies.length) {
		command += ' -b "' + har.request.cookies.map(function(cookie) {
			return encodeURIComponent(cookie.name) + '=' + encodeURIComponent(cookie.value);
		}).join('&') + '"';
	}

	command += har.request.headers.map(function(header) {
		return ' -H "' + header.name + ': ' + header.value + '"';
	}).join('');

	if (har.request.postData) {
		command += ' -d "' + har.request.postData.text + '"';
	}

	return command + ' ' + har.request.url;
};
