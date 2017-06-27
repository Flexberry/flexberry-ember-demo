import Ember from 'ember';
import { Model as SuggestionFileMixin, defineProjections } from
  '../mixins/regenerated/models/flexberry-ember-demo-suggestion-file';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, SuggestionFileMixin, {
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      suggestion: { presence: { message: 'models.flexberry-ember-demo-suggestion-file.validations.suggestion' } }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
});
defineProjections(Model);
export default Model;
