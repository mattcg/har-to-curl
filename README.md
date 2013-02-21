# HAR to curl #

Written in JavaScript. CommonJS format. Inspired by a [Python implementation](https://github.com/snoe/harToCurl).

## Example ##

```JavaScript
var harToCurl = require('har-to-curl');

var myHarObject = JSON.parse('{"startedDateTime": "2013-02-21T16:23:17.806Z", "time": 577, "request": { "method": "GET", "url": "http://...');
var myCurlCommand = harToCurl(myHarObject);
```

## License ##

MIT (see LICENSE.txt).
