import { test } from 'qunit';
import moduleForAcceptance from 'flexberry-ember-demo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | suggestions');

test('visiting /suggestions', function(assert) {
  visit('/suggestions');

  andThen(function() {
    assert.equal(currentURL(), '/suggestions/page/1');
  });
});
