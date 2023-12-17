import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  фио: DS.attr('string')
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-dfdf-сотрудники.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фио: {
    descriptionKey: 'models.i-i-s-dfdf-сотрудники.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-dfdf-сотрудники', {
    код: attr('Код', { index: 0 }),
    фио: attr('Фио', { index: 1 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-dfdf-сотрудники', {
    код: attr('Код', { index: 0 }),
    фио: attr('Фио', { index: 1 })
  });
};
