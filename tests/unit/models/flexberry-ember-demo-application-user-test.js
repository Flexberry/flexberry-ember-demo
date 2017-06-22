import { moduleForModel, test } from 'ember-qunit';

moduleForModel('flexberry-ember-demo-application-user', 'Unit | Model | flexberry-ember-demo-application-user', {
  // Specify the other units that are required for this test.
  needs: [
    'model:flexberry-ember-demo-application-user',
    'model:flexberry-ember-demo-comment-vote',
    'model:flexberry-ember-demo-comment',
    'model:flexberry-ember-demo-localization',
    'model:flexberry-ember-demo-localized-suggestion-type',
    'model:flexberry-ember-demo-offline-user',
    'model:flexberry-ember-demo-suggestion-file',
    'model:flexberry-ember-demo-suggestion-type',
    'model:flexberry-ember-demo-suggestion',
    'model:flexberry-ember-demo-vote'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
