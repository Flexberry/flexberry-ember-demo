/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'flexberry-ember-demo',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      backendUrl: 'http://flexberry-ember-demo.azurewebsites.net/odata'
    }
  };

  if (environment === 'development') {
//     ENV.APP.backendUrl = 'http://localhost:7176/odata';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
