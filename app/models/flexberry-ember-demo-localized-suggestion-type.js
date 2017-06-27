import Ember from 'ember';
import { Model as LocalizedSuggestionTypeMixin, defineProjections } from
  '../mixins/regenerated/models/flexberry-ember-demo-localized-suggestion-type';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, LocalizedSuggestionTypeMixin, {
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      name: { presence: { message: 'models.flexberry-ember-demo-localized-suggestion-type.validations.name' } },
      localization: { presence: { message: 'models.flexberry-ember-demo-localized-suggestion-type.validations.localization' } },
      suggestionType: { presence: { message: 'models.flexberry-ember-demo-localized-suggestion-type.validations.suggestionType' } }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
});
defineProjections(Model);
export default Model;
