import Ember from 'ember';
import OfflineSupportInitializer from 'sk-public-insight/initializers/offline-support';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | offline support', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  OfflineSupportInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
