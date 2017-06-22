import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      name: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('LocalizationE', 'flexberry-ember-demo-localization', {
    name: Projection.attr('Название')
  });
  modelClass.defineProjection('LocalizationL', 'flexberry-ember-demo-localization', {
    name: Projection.attr('Название')
  });
};
