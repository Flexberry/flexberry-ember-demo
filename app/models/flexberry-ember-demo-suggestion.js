import Ember from 'ember';
import { Model as SuggestionMixin, defineProjections } from
  '../mixins/regenerated/models/flexberry-ember-demo-suggestion';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, SuggestionMixin, {
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      type: { presence: { message: 'models.flexberry-ember-demo-suggestion.validations.type' } },
      author: { presence: { message: 'models.flexberry-ember-demo-suggestion.validations.author' } }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
});
defineProjections(Model);
export default Model;
