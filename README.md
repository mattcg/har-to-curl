# HAR to cURL #

Written in JavaScript. CommonJS format. Inspired by a [Python implementation](https://github.com/snoe/harToCurl).

:speech_balloon: Try the [web interface](http://mattcg.github.com/har-to-curl/).

## Install ##

You'll need [Component](https://github.com/component/component) and GNU make to build the standalone browser version. Then run:

```bash
git clone https://github.com/mattcg/har-to-curl.git
cd har-to-curl/
make
ls -l build/
```

Alternatively, use Component to install to your project.

```bash
component install har-to-curl
```

You can also use Bower.

```bash
bower install har-to-curl
```

And npm.

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

Copyright © 2012 [Matthew Caruana Galizia](http://twitter.com/mcaruanagalizia), licensed under an [MIT license](http://mattcg.mit-license.org/).
