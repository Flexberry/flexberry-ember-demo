import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(model) {
      alert('save '+this.suggestionText);
    },
    saveText(text) {
        this.suggestionText=text;     
      alert('saveText '+text);
    },
    addSuggest(form) {
        alert('addSuggest '+form);
    }
  }
});
