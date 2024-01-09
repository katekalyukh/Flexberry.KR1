import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  бумага: DS.attr('boolean'),
  времяПроверки: DS.attr('string'),
  готовКРаботе: DS.attr('boolean'),
  датаПроверки: DS.attr('date'),
  картЗаправ: DS.attr('boolean'),
  оператор: DS.belongsTo('i-i-s-k-r1-оператор', { inverse: null, async: false }),
  фотокиоск: DS.belongsTo('i-i-s-k-r1-фотокиоск', { inverse: null, async: false })
});

export let ValidationRules = {
  бумага: {
    descriptionKey: 'models.i-i-s-k-r1-проверка-киоска.validations.бумага.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  времяПроверки: {
    descriptionKey: 'models.i-i-s-k-r1-проверка-киоска.validations.времяПроверки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  готовКРаботе: {
    descriptionKey: 'models.i-i-s-k-r1-проверка-киоска.validations.готовКРаботе.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаПроверки: {
    descriptionKey: 'models.i-i-s-k-r1-проверка-киоска.validations.датаПроверки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  картЗаправ: {
    descriptionKey: 'models.i-i-s-k-r1-проверка-киоска.validations.картЗаправ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оператор: {
    descriptionKey: 'models.i-i-s-k-r1-проверка-киоска.validations.оператор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  фотокиоск: {
    descriptionKey: 'models.i-i-s-k-r1-проверка-киоска.validations.фотокиоск.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПроверкаКиоскаE', 'i-i-s-k-r1-проверка-киоска', {
    картЗаправ: attr('Картридж заправлен', { index: 0 }),
    бумага: attr('Бумага', { index: 1 }),
    датаПроверки: attr('Дата проверки', { index: 2 }),
    времяПроверки: attr('Время проверки', { index: 3 }),
    готовКРаботе: attr('Готов к работе', { index: 4 })
  });

  modelClass.defineProjection('ПроверкаКиоскаL', 'i-i-s-k-r1-проверка-киоска', {
    картЗаправ: attr('Картридж заправлен', { index: 0 }),
    бумага: attr('Бумага', { index: 1 }),
    датаПроверки: attr('Дата проверки', { index: 2 }),
    времяПроверки: attr('Время проверки', { index: 3 }),
    готовКРаботе: attr('Готов к работе', { index: 4 })
  });
};
