# HAR to cURL #

Written in JavaScript. CommonJS format. Inspired by a [Python implementation](https://github.com/snoe/harToCurl).

:speech_balloon: Try the [web interface](https://mattcg.github.io/har-to-curl/).

## Install ##

Use npm:

```bash
npm install har-to-curl
```

## Example ##

```JavaScript
var harToCurl = require('har-to-curl');

var myHarString = '{"startedDateTime": "2013-02-21T16:23:17.806Z", "time": 577, "request": { "method": "GET", "url": "http://...';
var myCurlCommand;

// Passing in an object:
var myHarObject = JSON.parse(myHarString);
myCurlCommand = harToCurl(myHarObject);

// Passing in a string - will be JSON.parsed automatically:
myCurlCommand = harToCurl(myHarString);
```

## License ##

Copyright © 2012 [Matthew Caruana Galizia](https://twitter.com/mcaruanagalizia), licensed under an [MIT license](http://mattcg.mit-license.org/).
