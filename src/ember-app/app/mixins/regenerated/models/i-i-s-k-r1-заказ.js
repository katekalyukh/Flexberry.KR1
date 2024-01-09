import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерЗаказа: DS.attr('number'),
  носитель: DS.attr('i-i-s-k-r1-вид-носителя'),
  клиент: DS.belongsTo('i-i-s-k-r1-клиент', { inverse: null, async: false }),
  фотокиоск: DS.belongsTo('i-i-s-k-r1-фотокиоск', { inverse: null, async: false }),
  фото: DS.hasMany('i-i-s-k-r1-фото', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  номерЗаказа: {
    descriptionKey: 'models.i-i-s-k-r1-заказ.validations.номерЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  носитель: {
    descriptionKey: 'models.i-i-s-k-r1-заказ.validations.носитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-k-r1-заказ.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  фотокиоск: {
    descriptionKey: 'models.i-i-s-k-r1-заказ.validations.фотокиоск.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  фото: {
    descriptionKey: 'models.i-i-s-k-r1-заказ.validations.фото.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-k-r1-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    носитель: attr('Носитель', { index: 1 }),
    фото: hasMany('i-i-s-k-r1-фото', 'Фото', {
      количество: attr('Количество', { index: 0 })
    })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-k-r1-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    носитель: attr('Носитель', { index: 1 }),
    фото: hasMany('i-i-s-k-r1-фото', '', {
      количество: attr('Количество', { index: 0 })
    })
  });
};
