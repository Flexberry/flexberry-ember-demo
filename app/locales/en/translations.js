import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';
import EmberFlexberryGisTranslations from 'ember-flexberry-gis/locales/en/translations';

import FlexberryEmberDemoApplicationUserLForm from './forms/flexberry-ember-demo-application-user-l';
import FlexberryEmberDemoLocalizationLForm from './forms/flexberry-ember-demo-localization-l';
import FlexberryEmberDemoSuggestionLForm from './forms/flexberry-ember-demo-suggestion-l';
import FlexberryEmberDemoSuggestionTypeLForm from './forms/flexberry-ember-demo-suggestion-type-l';
import FlexberryEmberDemoApplicationUserEForm from './forms/flexberry-ember-demo-application-user-e';
import FlexberryEmberDemoLocalizationEForm from './forms/flexberry-ember-demo-localization-e';
import FlexberryEmberDemoSuggestionEForm from './forms/flexberry-ember-demo-suggestion-e';
import FlexberryEmberDemoSuggestionTypeEForm from './forms/flexberry-ember-demo-suggestion-type-e';
import FlexberryEmberDemoApplicationUserModel from './models/flexberry-ember-demo-application-user';
import FlexberryEmberDemoCommentVoteModel from './models/flexberry-ember-demo-comment-vote';
import FlexberryEmberDemoCommentModel from './models/flexberry-ember-demo-comment';
import FlexberryEmberDemoLocalizationModel from './models/flexberry-ember-demo-localization';
import FlexberryEmberDemoLocalizedSuggestionTypeModel from './models/flexberry-ember-demo-localized-suggestion-type';
import FlexberryEmberDemoSuggestionFileModel from './models/flexberry-ember-demo-suggestion-file';
import FlexberryEmberDemoSuggestionTypeModel from './models/flexberry-ember-demo-suggestion-type';
import FlexberryEmberDemoSuggestionModel from './models/flexberry-ember-demo-suggestion';
import FlexberryEmberDemoVoteModel from './models/flexberry-ember-demo-vote';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);
Ember.$.extend(true, translations, EmberFlexberryGisTranslations);

Ember.$.extend(true, translations, {
  components: {
    'map-tools': {
      'draw-suggestion': {
        caption: 'Create suggestion'
      }
    }
  },

  models: {
    'flexberry-ember-demo-application-user': FlexberryEmberDemoApplicationUserModel,
    'flexberry-ember-demo-comment-vote': FlexberryEmberDemoCommentVoteModel,
    'flexberry-ember-demo-comment': FlexberryEmberDemoCommentModel,
    'flexberry-ember-demo-localization': FlexberryEmberDemoLocalizationModel,
    'flexberry-ember-demo-localized-suggestion-type': FlexberryEmberDemoLocalizedSuggestionTypeModel,
    'flexberry-ember-demo-suggestion-file': FlexberryEmberDemoSuggestionFileModel,
    'flexberry-ember-demo-suggestion-type': FlexberryEmberDemoSuggestionTypeModel,
    'flexberry-ember-demo-suggestion': FlexberryEmberDemoSuggestionModel,
    'flexberry-ember-demo-vote': FlexberryEmberDemoVoteModel,
  },

  'application-name': 'Demo application ember-flexberry',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    login: {
      caption: 'Login',
      logout: 'Logout',
      back: 'Back',
      login: 'Login',
      password: 'Password',
      'you-logged-as': 'You logged as: "{{login}}".',
      errors: {
        'empty-login': 'Login can not be empty.',
        'empty-password': 'Password can not be empty.',
        'server-error': 'Not response from server.',
        'incorrect-auth-data': 'Wrong login or password.',
        'login-please': 'Please, login.',
        'unknown-error': 'Oh, something went wrong...',
      },
    },

    map: {
      caption: 'Map',
      treeviewbuttontooltip: 'Show tree view',
      searchbuttontooltip: 'Show search',
      bookmarksbuttontooltip: 'Spatial bookmarks',
      identifybuttontooltip: 'Show identification'
    },

    crs: {
      current: {
        name: 'In map\'s coordinate system',
        xCaption: 'X',
        yCaption: 'Y'
      },
      latlng: {
        name: 'Latitude and Longitude',
        xCaption: 'Latitude',
        yCaption: 'Longitude'
      }
    },

    application: {
      header: {
        menu: {
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'sitemap-button': {
            caption: '',
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'List\'s user settings'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        }
      },

      'sync-up': 'Sync-up',
      'sync-down': 'Sync-down',

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        map: {
          caption: 'Map',
          title: ''
        },
        'flexberry-ember-demo': {
          caption: 'flexberry-ember-demo',
          title: 'flexberry-ember-demo',
          'flexberry-ember-demo-suggestion-type-l': {
            caption: 'flexberry-ember-demo-suggestion-type-l',
            title: 'flexberry-ember-demo-suggestion-type-l',

          },
          'flexberry-ember-demo-application-user-l': {
            caption: 'flexberry-ember-demo-application-user-l',
            title: 'flexberry-ember-demo-application-user-l',

          },
          'flexberry-ember-demo-localization-l': {
            caption: 'flexberry-ember-demo-localization-l',
            title: 'flexberry-ember-demo-localization-l',

          },
          'flexberry-ember-demo-suggestion-l': {
            caption: 'flexberry-ember-demo-suggestion-l',
            title: 'flexberry-ember-demo-suggestion-l',

          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'flexberry-ember-demo-application-user-l': FlexberryEmberDemoApplicationUserLForm,
    'flexberry-ember-demo-localization-l': FlexberryEmberDemoLocalizationLForm,
    'flexberry-ember-demo-suggestion-l': FlexberryEmberDemoSuggestionLForm,
    'flexberry-ember-demo-suggestion-type-l': FlexberryEmberDemoSuggestionTypeLForm,
    'flexberry-ember-demo-application-user-e': FlexberryEmberDemoApplicationUserEForm,
    'flexberry-ember-demo-localization-e': FlexberryEmberDemoLocalizationEForm,
    'flexberry-ember-demo-suggestion-e': FlexberryEmberDemoSuggestionEForm,
    'flexberry-ember-demo-suggestion-type-e': FlexberryEmberDemoSuggestionTypeEForm,
  },

});

export default translations;
