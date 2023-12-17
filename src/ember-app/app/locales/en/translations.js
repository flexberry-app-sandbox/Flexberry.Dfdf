import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISDfdfДирПерсоналаLForm from './forms/i-i-s-dfdf-дир-персонала-l';
import IISDfdfСогласиеLForm from './forms/i-i-s-dfdf-согласие-l';
import IISDfdfСотрудникиLForm from './forms/i-i-s-dfdf-сотрудники-l';
import IISDfdfДирПерсоналаEForm from './forms/i-i-s-dfdf-дир-персонала-e';
import IISDfdfСогласиеEForm from './forms/i-i-s-dfdf-согласие-e';
import IISDfdfСотрудникиEForm from './forms/i-i-s-dfdf-сотрудники-e';
import IISDfdfДирПерсоналаModel from './models/i-i-s-dfdf-дир-персонала';
import IISDfdfСогласиеModel from './models/i-i-s-dfdf-согласие';
import IISDfdfСотрудникиModel from './models/i-i-s-dfdf-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-dfdf-дир-персонала': IISDfdfДирПерсоналаModel,
    'i-i-s-dfdf-согласие': IISDfdfСогласиеModel,
    'i-i-s-dfdf-сотрудники': IISDfdfСотрудникиModel
  },

  'application-name': 'Dfdf',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Dfdf',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Dfdf',
          title: 'Dfdf'
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
        dfdf: {
          caption: 'Dfdf',
          title: 'Dfdf',
          'i-i-s-dfdf-дир-персонала-l': {
            caption: 'Дир персонала',
            title: ''
          },
          'i-i-s-dfdf-согласие-l': {
            caption: 'Согласие',
            title: ''
          },
          'i-i-s-dfdf-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
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
    'i-i-s-dfdf-дир-персонала-l': IISDfdfДирПерсоналаLForm,
    'i-i-s-dfdf-согласие-l': IISDfdfСогласиеLForm,
    'i-i-s-dfdf-сотрудники-l': IISDfdfСотрудникиLForm,
    'i-i-s-dfdf-дир-персонала-e': IISDfdfДирПерсоналаEForm,
    'i-i-s-dfdf-согласие-e': IISDfdfСогласиеEForm,
    'i-i-s-dfdf-сотрудники-e': IISDfdfСотрудникиEForm
  },

});

export default translations;
