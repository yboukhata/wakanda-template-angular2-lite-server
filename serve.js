'use strict';

var minimist = require('minimist');
var path = require('path');
var exec = require('child_process').exec;

var defaultOptions = {
    default: {
        serverUrl: 'http://127.0.0.1:8081',
        port: 8000,
        livereloadPort: 35729,
        open: false
    }
};

var options = minimist(process.argv.slice(2), defaultOptions);
var bsConfigPath = path.resolve('bs-config.json');
require('fs').writeFileSync(bsConfigPath, JSON.stringify(options), 'utf8');
