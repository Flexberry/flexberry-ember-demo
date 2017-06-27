import Ember from 'ember';
import { Model as LocalizationMixin, defineProjections } from
  '../mixins/regenerated/models/flexberry-ember-demo-localization';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, LocalizationMixin, {
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      name: { presence: { message: 'models.flexberry-ember-demo-localization.validations.name' } }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
});
defineProjections(Model);
export default Model;
