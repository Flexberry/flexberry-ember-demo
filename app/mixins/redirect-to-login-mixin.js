import Ember from 'ember';

export default Ember.Mixin.create({
  offlineGlobals: Ember.inject.service('offline-globals'),

  beforeModel() {
    let login = Ember.get(Ember.getOwner(this).lookup('controller:application'), 'login');
    if (Ember.isBlank(login)) {
      this.transitionTo('login');
    }

    this._super(...arguments);
  }
});
