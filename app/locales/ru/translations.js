import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';
import EmberFlexberryGisTranslations from 'ember-flexberry-gis/locales/ru/translations';

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
        caption: 'Создать предложение'
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

  'application-name': 'Демонстрационное приложение ember-flexberry',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    login: {
      caption: 'Войти',
      logout: 'Выйти',
      back: 'Назад',
      login: 'Логин',
      password: 'Пароль',
      'you-logged-as': 'Вы вошли как: "{{login}}".',
      errors: {
        'empty-login': 'Логин не может быть пустым.',
        'empty-password': 'Пароль не может быть пустым.',
        'server-error': 'Не удалось получить ответ от сервера.',
        'incorrect-auth-data': 'Неверный логин или пароль.',
        'login-please': 'Пожалуйста, войдите.',
        'unknown-error': 'Ой, что то пошло не так...',
      },
    },

    map: {
      caption: 'Карта',
      treeviewbuttontooltip: 'Показать дерево слоёв',
      searchbuttontooltip: 'Показать поиск',
      bookmarksbuttontooltip: 'Пространственные закладки',
      identifybuttontooltip: 'Показать идентификацию'
    },

    crs: {
      current: {
        name: 'В системе коодинат карты',
        xCaption: 'X',
        yCaption: 'Y'
      },
      latlng: {
        name: 'Широта и Долгота',
        xCaption: 'Широта',
        yCaption: 'Долгота'
      }
    },

    application: {
      header: {
        menu: {
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'sitemap-button': {
            caption: '',
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Пользовательские настройки списков'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        }
      },

      'sync-up': 'Синхронизировать',
      'sync-down': 'Sync-down',

      footer: {
        'application-name': 'Flexberry ember demo',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Flexberry ember demo',
          title: 'Flexberry ember demo'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        map: {
          caption: 'Карта',
          title: ''
        },
        'flexberry-ember-demo': {
          caption: 'FlexberryEmberDemo',
          title: 'FlexberryEmberDemo',
          'flexberry-ember-demo-suggestion-type-l': {
            caption: 'Типы предложений',
            title: '',

          },
          'flexberry-ember-demo-application-user-l': {
            caption: 'Пользователи приложения',
            title: '',

          },
          'flexberry-ember-demo-localization-l': {
            caption: 'Локализация',
            title: '',

          },
          'flexberry-ember-demo-suggestion-l': {
            caption: 'Предложения',
            title: '',

          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
