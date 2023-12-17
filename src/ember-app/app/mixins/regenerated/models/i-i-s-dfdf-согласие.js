import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  код: DS.attr('number'),
  дирПерсонала: DS.belongsTo('i-i-s-dfdf-дир-персонала', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-dfdf-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-dfdf-согласие.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-dfdf-согласие.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дирПерсонала: {
    descriptionKey: 'models.i-i-s-dfdf-согласие.validations.дирПерсонала.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-dfdf-согласие.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СогласиеE', 'i-i-s-dfdf-согласие', {
    код: attr('Код', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    сотрудники: belongsTo('i-i-s-dfdf-сотрудники', 'Сотрудники', {
      фио: attr('Фио', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фио' })
  });

  modelClass.defineProjection('СогласиеL', 'i-i-s-dfdf-согласие', {
    код: attr('Код', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    сотрудники: belongsTo('i-i-s-dfdf-сотрудники', 'Фио', {
      фио: attr('Фио', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
