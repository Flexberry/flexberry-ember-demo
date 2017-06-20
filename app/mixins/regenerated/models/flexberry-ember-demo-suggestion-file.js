import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  order: DS.attr('number'),
  file: DS.attr('file'),
  suggestion: DS.belongsTo('flexberry-ember-demo-suggestion', { inverse: 'files', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      suggestion: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SuggestionFileE', 'flexberry-ember-demo-suggestion-file', {
    order: Projection.attr('Порядок'),
    file: Projection.attr('Файл')
  });
};
