import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dfdf-согласие', 'Unit | Model | i-i-s-dfdf-согласие', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-dfdf-дир-персонала',
    'model:i-i-s-dfdf-согласие',
    'model:i-i-s-dfdf-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
