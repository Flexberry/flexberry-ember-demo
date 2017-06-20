import { moduleForModel, test } from 'ember-qunit';

moduleForModel('flexberry-ember-demo-vote', 'Unit | Serializer | flexberry-ember-demo-vote', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:flexberry-ember-demo-vote',
    'transform:file',
    'transform:decimal',

    'transform:flexberry-ember-demo-gender',
    'transform:flexberry-ember-demo-vote-type',

    'model:flexberry-ember-demo-application-user',
    'model:flexberry-ember-demo-comment-vote',
    'model:flexberry-ember-demo-comment',
    'model:flexberry-ember-demo-localization',
    'model:flexberry-ember-demo-localized-suggestion-type',
    'model:flexberry-ember-demo-suggestion-file',
    'model:flexberry-ember-demo-suggestion-type',
    'model:flexberry-ember-demo-suggestion',
    'model:flexberry-ember-demo-vote'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
