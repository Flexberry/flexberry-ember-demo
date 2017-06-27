import Ember from 'ember';
import { Model as VoteMixin, defineProjections } from
  '../mixins/regenerated/models/flexberry-ember-demo-vote';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, VoteMixin, {
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      applicationUser: { presence: { message: 'models.flexberry-ember-demo-vote.validations.applicationUser' } },
      suggestion: { presence: { message: 'models.flexberry-ember-demo-vote.validations.suggestion' } }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
});
defineProjections(Model);
export default Model;
