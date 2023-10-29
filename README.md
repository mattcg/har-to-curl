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

## CLI Usage ##
```Bash
$ (set -x; har-to-curl  /tmp/HarFiles/013b0a68-825b-4303-ba3a-ae6167d1b89c.har  | jq -r '.[0]' | bash -x | jq)
+ har-to-curl /tmp/HarFiles/013b0a68-825b-4303-ba3a-ae6167d1b89c.har
+ jq -r '.[0]'
+ bash -x
+ jq
+ curl -X POST -H 'X-Correlation-Id: 013b0a68-825b-4303-ba3a-ae6167d1b89c' http://localhost:3000/api/coffee
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100    20  100    20    0     0      3      0  0:00:06  0:00:05  0:00:01     5
{
  "status": "success"
}
```

## License ##

Copyright © 2012 [Matthew Caruana Galizia](https://twitter.com/mcaruanagalizia), licensed under an [MIT license](http://mattcg.mit-license.org/).
