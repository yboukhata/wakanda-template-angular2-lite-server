var path = require('path');
var _ = require('lodash')
var options = {
    serverUrl: 'http://127.0.0.1:8081',
    port: 8000,
    livereloadPort: 35729,
    open: false
};

try {
  var bsConfigPath = path.resolve('bs-config.json');
  var overrides = JSON.parse(require('fs').readFileSync(bsConfigPath, 'utf8'));
  options = _.merge(options, overrides)
} catch(err) {
  console.error(err);
}

module.exports = {
  open: options.open,
  port: options.port,
  server: {
    middleware: {
      1: require('http-proxy-middleware')('/rest/', {
          target: options.serverUrl,
          changeOrigin: false,
          ws: true
      })
    }
  }
};
