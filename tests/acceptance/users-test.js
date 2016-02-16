import { test } from 'qunit';
import moduleForAcceptance from 'flexberry-ember-demo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | users');

test('visiting /users', function(assert) {
  visit('/users');

  andThen(function() {
    assert.equal(currentURL(), '/users/page/1');
  });
});
