import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Dfdf',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Dfdf',
          title: 'Dfdf'
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
