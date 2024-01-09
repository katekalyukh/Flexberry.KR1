import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKR1ЗаказLForm from './forms/i-i-s-k-r1-заказ-l';
import IISKR1КлиентLForm from './forms/i-i-s-k-r1-клиент-l';
import IISKR1ОператорLForm from './forms/i-i-s-k-r1-оператор-l';
import IISKR1ПроверкаКиоскаLForm from './forms/i-i-s-k-r1-проверка-киоска-l';
import IISKR1ТоварыLForm from './forms/i-i-s-k-r1-товары-l';
import IISKR1ФотокиоскLForm from './forms/i-i-s-k-r1-фотокиоск-l';
import IISKR1ЧекLForm from './forms/i-i-s-k-r1-чек-l';
import IISKR1ЗаказEForm from './forms/i-i-s-k-r1-заказ-e';
import IISKR1КлиентEForm from './forms/i-i-s-k-r1-клиент-e';
import IISKR1ОператорEForm from './forms/i-i-s-k-r1-оператор-e';
import IISKR1ПроверкаКиоскаEForm from './forms/i-i-s-k-r1-проверка-киоска-e';
import IISKR1ТоварыEForm from './forms/i-i-s-k-r1-товары-e';
import IISKR1ФотокиоскEForm from './forms/i-i-s-k-r1-фотокиоск-e';
import IISKR1ЧекEForm from './forms/i-i-s-k-r1-чек-e';
import IISKR1ЗаказModel from './models/i-i-s-k-r1-заказ';
import IISKR1КлиентModel from './models/i-i-s-k-r1-клиент';
import IISKR1ОператорModel from './models/i-i-s-k-r1-оператор';
import IISKR1ПроверкаКиоскаModel from './models/i-i-s-k-r1-проверка-киоска';
import IISKR1ТоварыModel from './models/i-i-s-k-r1-товары';
import IISKR1ФотоModel from './models/i-i-s-k-r1-фото';
import IISKR1ФотокиоскModel from './models/i-i-s-k-r1-фотокиоск';
import IISKR1ЧекModel from './models/i-i-s-k-r1-чек';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-k-r1-заказ': IISKR1ЗаказModel,
    'i-i-s-k-r1-клиент': IISKR1КлиентModel,
    'i-i-s-k-r1-оператор': IISKR1ОператорModel,
    'i-i-s-k-r1-проверка-киоска': IISKR1ПроверкаКиоскаModel,
    'i-i-s-k-r1-товары': IISKR1ТоварыModel,
    'i-i-s-k-r1-фото': IISKR1ФотоModel,
    'i-i-s-k-r1-фотокиоск': IISKR1ФотокиоскModel,
    'i-i-s-k-r1-чек': IISKR1ЧекModel
  },

  'application-name': 'K r1',

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
        'application-name': 'K r1',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'K r1',
          title: 'K r1'
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
        'k-r1': {
          caption: 'KR1',
          title: 'KR1',
          'i-i-s-k-r1-оператор-l': {
            caption: 'Оператор',
            title: ''
          },
          'i-i-s-k-r1-проверка-киоска-l': {
            caption: 'Проверка киоска',
            title: ''
          },
          'i-i-s-k-r1-товары-l': {
            caption: 'Товары',
            title: ''
          },
          'i-i-s-k-r1-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-k-r1-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-k-r1-фотокиоск-l': {
            caption: 'Фотокиоск',
            title: ''
          },
          'i-i-s-k-r1-чек-l': {
            caption: 'Чек',
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
    'i-i-s-k-r1-заказ-l': IISKR1ЗаказLForm,
    'i-i-s-k-r1-клиент-l': IISKR1КлиентLForm,
    'i-i-s-k-r1-оператор-l': IISKR1ОператорLForm,
    'i-i-s-k-r1-проверка-киоска-l': IISKR1ПроверкаКиоскаLForm,
    'i-i-s-k-r1-товары-l': IISKR1ТоварыLForm,
    'i-i-s-k-r1-фотокиоск-l': IISKR1ФотокиоскLForm,
    'i-i-s-k-r1-чек-l': IISKR1ЧекLForm,
    'i-i-s-k-r1-заказ-e': IISKR1ЗаказEForm,
    'i-i-s-k-r1-клиент-e': IISKR1КлиентEForm,
    'i-i-s-k-r1-оператор-e': IISKR1ОператорEForm,
    'i-i-s-k-r1-проверка-киоска-e': IISKR1ПроверкаКиоскаEForm,
    'i-i-s-k-r1-товары-e': IISKR1ТоварыEForm,
    'i-i-s-k-r1-фотокиоск-e': IISKR1ФотокиоскEForm,
    'i-i-s-k-r1-чек-e': IISKR1ЧекEForm
  },

});

export default translations;
