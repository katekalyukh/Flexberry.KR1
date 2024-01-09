import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-k-r1-клиент', 'Unit | Serializer | i-i-s-k-r1-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-k-r1-клиент',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-k-r1-вид-носителя',

    'model:i-i-s-k-r1-заказ',
    'model:i-i-s-k-r1-клиент',
    'model:i-i-s-k-r1-оператор',
    'model:i-i-s-k-r1-проверка-киоска',
    'model:i-i-s-k-r1-товары',
    'model:i-i-s-k-r1-фото',
    'model:i-i-s-k-r1-фотокиоск',
    'model:i-i-s-k-r1-чек',
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
