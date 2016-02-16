import { test } from 'qunit';
import moduleForAcceptance from 'flexberry-ember-demo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | suggestion types');

test('visiting /suggestionTypes', function(assert) {
  visit('/suggestionTypes');

  andThen(function() {
    assert.equal(currentURL(), '/suggestionTypes/page/1');
  });
});
