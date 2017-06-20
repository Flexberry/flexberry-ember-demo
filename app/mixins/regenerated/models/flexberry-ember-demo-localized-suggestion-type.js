import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  localization: DS.belongsTo('flexberry-ember-demo-localization', { inverse: null, async: false }),
  suggestionType: DS.belongsTo('flexberry-ember-demo-suggestion-type', { inverse: 'localizedTypes', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      name: { presence: true },
      localization: { presence: true },
      suggestionType: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('LocalizedSuggestionTypeE', 'flexberry-ember-demo-localized-suggestion-type', {
    name: Projection.attr('Название'),
    localization: Projection.belongsTo('flexberry-ember-demo-localization', 'Локализация', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' })
  });
};
