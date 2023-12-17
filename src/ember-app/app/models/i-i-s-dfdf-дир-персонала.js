import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДирПерсоналаMixin
} from '../mixins/regenerated/models/i-i-s-dfdf-дир-персонала';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДирПерсоналаMixin, Validations, {
});

defineProjections(Model);

export default Model;
