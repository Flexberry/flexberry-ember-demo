import Ember from 'ember';
import { Model as ApplicationUserMixin, defineProjections } from
  '../mixins/regenerated/models/flexberry-ember-demo-application-user';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ApplicationUserMixin, {
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      name: { presence: { message: 'models.flexberry-ember-demo-application-user.validations.name' } },
      login: { presence: { message: 'models.flexberry-ember-demo-application-user.validations.login' } },
      eMail: { presence: { message: 'models.flexberry-ember-demo-application-user.validations.eMail' } }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
});
defineProjections(Model);
export default Model;
