import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(model) {
      store.createRecord('flexberry-ember-demo-suggestion', {
        address: '...',
        body: 'Lorem ipsum'
        });
      alert('save '+model);
    },
  }
});
