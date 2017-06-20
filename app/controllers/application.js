import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  /**
  */
  login: '',

  offlineGlobals: Ember.inject.service('offline-globals'),

  /**
  */
  onlineStatus: Ember.computed('offlineGlobals.isOnline', {
    get() {
      return this.get('offlineGlobals.isOnline');
    },
    set(key, newValue, oldValue) {
      if (newValue !== oldValue) {
        this.get('offlineGlobals').setOnlineAvailable(newValue);
      }

      return newValue;
    },
  }),

  /**
  */
  synchronizes: false,

  /**
    Locales supported by application.

    @property locales
    @type String[]
    @default ['ru', 'en']
  */
  locales: ['ru', 'en'],

  /**
    Handles changes in userSettingsService.isUserSettingsServiceEnabled.

    @method _userSettingsServiceChanged
    @private
  */
  _userSettingsServiceChanged: Ember.observer('userSettingsService.isUserSettingsServiceEnabled', function() {
    this.get('target.router').refresh();
  }),

  /**
    Initializes controller.
  */
  init() {
    this._super(...arguments);

    this.set('onlineStatus', false);
    let i18n = this.get('i18n');
    if (Ember.isNone(i18n)) {
      return;
    }

    // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
    let shortCurrentLocale = this.get('i18n.locale').split('-')[0];
    let availableLocales = Ember.A(this.get('locales'));

    // Force current locale to be one of available,
    // if browser's current language is not supported by dummy application,
    // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
    if (!availableLocales.contains(shortCurrentLocale)) {
      i18n.set('locale', 'en');
    } else {
      i18n.set('locale', shortCurrentLocale);
    }
  },

  sitemap: Ember.computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          caption: i18n.t('forms.application.sitemap.flexberry-ember-demo.caption'),
          title: i18n.t('forms.application.sitemap.flexberry-ember-demo.title'),
          children: [{
            link: 'flexberry-ember-demo-application-user-l',
            caption: i18n.t('forms.application.sitemap.flexberry-ember-demo.flexberry-ember-demo-application-user-l.caption'),
            title: i18n.t('forms.application.sitemap.flexberry-ember-demo.flexberry-ember-demo-application-user-l.title'),
            children: null
          }, {
            link: 'flexberry-ember-demo-localization-l',
            caption: i18n.t('forms.application.sitemap.flexberry-ember-demo.flexberry-ember-demo-localization-l.caption'),
            title: i18n.t('forms.application.sitemap.flexberry-ember-demo.flexberry-ember-demo-localization-l.title'),
            children: null
          }, {
            link: 'flexberry-ember-demo-suggestion-l',
            caption: i18n.t('forms.application.sitemap.flexberry-ember-demo.flexberry-ember-demo-suggestion-l.caption'),
            title: i18n.t('forms.application.sitemap.flexberry-ember-demo.flexberry-ember-demo-suggestion-l.title'),
            children: null
          }, {
            link: 'flexberry-ember-demo-suggestion-type-l',
            caption: i18n.t('forms.application.sitemap.flexberry-ember-demo.flexberry-ember-demo-suggestion-type-l.caption'),
            title: i18n.t('forms.application.sitemap.flexberry-ember-demo.flexberry-ember-demo-suggestion-type-l.title'),
            children: null
          }]
        }, {
          link: 'map',
          caption: i18n.t('forms.application.sitemap.map.caption'),
          title: i18n.t('forms.application.sitemap.map.title'),
          children: null
        }
      ]
    };
  }),

  actions: {
    toggleSidebar() {
      Ember.$('.ui.sidebar.main.menu').sidebar({
        onHide: function() {
          Ember.$('.sidebar.icon.text-menu-1').removeClass('hidden-menu');
          Ember.$('.sidebar.icon.text-menu-2').addClass('hidden-menu');
        }
      }).sidebar('toggle');
      if (Ember.$('.inverted.vertical.menu').hasClass('visible')) {
        Ember.$('.sidebar.icon.text-menu-1').removeClass('hidden-menu');
        Ember.$('.sidebar.icon.text-menu-2').addClass('hidden-menu');
      } else {
        Ember.$('.sidebar.icon.text-menu-1').addClass('hidden-menu');
        Ember.$('.sidebar.icon.text-menu-2').removeClass('hidden-menu');
      }
    },

    syncUp() {
      let _this = this;
      _this.set('synchronizes', true);
      let syncer = Ember.getOwner(this).lookup('service:syncer');
      syncer.syncUp().then(() => {
        _this.set('synchronizes', false);
      }).catch((reason) => {
        Ember.Logger.debug(reason);
      });
    },

    /**
    */
    login() {
      let _this = this;
      let i18n = this.get('i18n');
      let login = _this.get('loginInput');
      let password = _this.get('password');
      if (login && password) {
        _this._resetLoginErrors();
        _this.set('tryToLogin', true);
        let store = Ember.getOwner(_this).lookup('service:store');
        if (_this.get('onlineStatus')) {
          Ember.$.ajax({
            type: 'GET',
            url: `${config.APP.backendUrls.api}/Login(login='${login}',password='${password}')`,
            success(result) {
              _this.set('tryToLogin', false);
              if (result.value === true) {
                _this._resetLoginData(login);
                store.queryRecord('flexberry-ember-demo-offline-user', { login: login }).then((record) => {
                  if (record) {
                    if (record.get('password') !== password) {
                      record.set('password', password);
                      record.save();
                    }
                  } else {
                    store.createRecord('flexberry-ember-demo-offline-user', { login: login, password: password }).save();
                  }

                  _this.transitionToRoute('index');
                });
              } else {
                _this.set('errorMessage', i18n.t('forms.login.errors.incorrect-auth-data'));
              }
            },
            error() {
              _this.set('tryToLogin', false);
              _this.set('errorMessage', i18n.t('forms.login.errors.server-error'));
            },
          });
        } else {
          store.queryRecord('flexberry-ember-demo-offline-user', { login: login, password: password }).then((record) => {
            _this.set('tryToLogin', false);
            if (record) {
              _this._resetLoginData(login);
              _this.transitionToRoute('index');
            } else {
              _this.set('errorMessage', i18n.t('forms.login.errors.incorrect-auth-data'));
            }
          });
        }
      } else {
        if (!login) {
          _this.set('emptyLogin', i18n.t('forms.login.errors.empty-login'));
        }

        if (!password) {
          _this.set('emptyPassword', i18n.t('forms.login.errors.empty-password'));
        }
      }
    },

    /**
    */
    logout() {
      let _this = this;
      let i18n = this.get('i18n');
      if (_this.get('onlineStatus')) {
        Ember.$.ajax({
          type: 'GET',
          url: `${config.APP.backendUrls.api}/Logout()`,
          success(result) {
            if (result.value === true) {
              _this.set('login', '');
            } else {
              _this.set('errorMessage', i18n.t('forms.login.errors.unknown-error'));
            }

            _this.transitionToRoute('index');
          },
          error() {
            _this.set('errorMessage', i18n.t('forms.login.errors.server-error'));
            _this.transitionToRoute('index');
          },
        });
      } else {
        _this.set('login', '');
        _this.transitionToRoute('index');
      }

    },

    /**
    */
    goToLoginForm() {
      this.transitionToRoute('login');
    },

    /**
    */
    closeLoginForm() {
      this._resetLoginErrors();
      this.transitionToRoute('index');
    },
  },

  /**
  */
  _resetLoginErrors() {
    this.setProperties({
      errorMessage: null,
      emptyLogin: null,
      emptyPassword: null,
    });
  },

  /**
  */
  _resetLoginData(login) {
    this.setProperties({
      login: login,
      loginInput: null,
      password: null,
    });
  }
});
