import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  заказ: DS.belongsTo('i-i-s-k-r1-заказ', { inverse: 'фото', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-k-r1-фото.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-k-r1-фото.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФотоE', 'i-i-s-k-r1-фото', {
    количество: attr('Количество', { index: 0 })
  });

  modelClass.defineProjection('ФотоL', 'i-i-s-k-r1-фото', {
    количество: attr('Количество', { index: 0 })
  });
};
