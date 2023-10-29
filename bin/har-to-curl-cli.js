#!/usr/bin/env node
const harToCurl = require('../lib/har-to-curl');
const fs = require('fs');
const path = require('path');

// Command-line arguments
const [,, harPath] = process.argv;


// Check if HAR file path is provided
if (!harPath) {
  console.error('Error: Please provide the path to the HAR file.');
  process.exit(1);
}


// Validate and read the HAR file
const absoluteHarPath = path.resolve(harPath);
if (!fs.existsSync(absoluteHarPath)) {
  console.error(`Error: File ${absoluteHarPath} does not exist.`);
  process.exit(1);
}

const harContent = fs.readFileSync(absoluteHarPath, 'utf8');
const harJson = JSON.parse(harContent);

// Convert HAR to cURL using your library
const curlCommand = harToCurl(harJson);

// Output the cURL command
if (curlCommand) {
  console.log(curlCommand);
} else {
  console.error('Error: Failed to convert HAR to cURL.');
  process.exit(1);
}
