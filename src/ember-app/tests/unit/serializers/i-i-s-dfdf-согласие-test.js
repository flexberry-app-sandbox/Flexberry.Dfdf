import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dfdf-согласие', 'Unit | Serializer | i-i-s-dfdf-согласие', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-dfdf-согласие',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-dfdf-дир-персонала',
    'model:i-i-s-dfdf-согласие',
    'model:i-i-s-dfdf-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
