/* jshint node: true */

module.exports = function(environment) {
  var backendUrl = 'https://flexberry-ember-dummy.azurewebsites.net';

  if (environment === 'development-loc') {
    // Use `ember s -e development-loc` command for local backend usage.
    backendUrl = 'http://localhost:6500';
  }

  var ENV = {
    modulePrefix: 'ember-app',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      backendUrl: backendUrl,

      // It's a custom property, used to prevent duplicate backend urls in sources.
      backendUrls: {
        root: backendUrl,
        api: backendUrl + '/odata'
      },

      useUserSettingsService: true,

      // Custom property with offline mode settings.
      offline: {
        dbName: 'flexberry-ember-demo',
        // Flag that indicates whether offline mode in application is enabled or not.
        offlineEnabled: true,

        // Flag that indicates whether to switch to offline mode when got online connection errors or not.
        modeSwitchOnErrorsEnabled: false,

        // Flag that indicates whether to sync down all work with records when online or not.
        // This let user to continue work without online connection.
        syncDownWhenOnlineEnabled: true,

        alwaysLoadedOnLoginObjects: [],

        checkIsAliveTimeout: 2000,
      },

      log: {
        enabled: true,
        storeErrorMessages: false,
        storeWarnMessages: false,
        storeLogMessages: false,
        storeInfoMessages: false,
        storeDebugMessages: false,
        storeDeprecationMessages: false,
        showPromiseErrors: true,
      },

      // Custom property with components settings.
      components: {
        // Settings for flexberry-file component.
        flexberryFile: {
          // URL of file upload controller.
          uploadUrl: backendUrl + '/api/File',

          // Max file size in bytes for uploading files.
          maxUploadFileSize: null,

          // Flag: indicates whether to upload file on controllers modelPreSave event.
          uploadOnModelPreSave: true,

          // Flag: indicates whether to show upload button or not.
          showUploadButton: true,

          // Flag: indicates whether to show modal dialog on upload errors or not.
          showModalDialogOnUploadError: true,

          // Flag: indicates whether to show modal dialog on download errors or not.
          showModalDialogOnDownloadError: true,
        }
      },
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
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
