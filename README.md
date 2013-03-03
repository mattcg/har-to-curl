# HAR to cURL #

Written in JavaScript. CommonJS format. Inspired by a [Python implementation](https://github.com/snoe/harToCurl).

## Example ##

```JavaScript
var harToCurl = require('har-to-curl');

var myHarObject = JSON.parse('{"startedDateTime": "2013-02-21T16:23:17.806Z", "time": 577, "request": { "method": "GET", "url": "http://...');
var myCurlCommand = harToCurl(myHarObject);
```

## License ##

Copyright © 2012 [Matthew Caruana Galizia](http://twitter.com/mcaruanagalizia), licensed under a [Creative Commons Attribution 3.0 Unported (CC BY 3.0)](http://creativecommons.org/licenses/by/3.0/legalcode) license.
