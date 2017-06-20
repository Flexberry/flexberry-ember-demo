import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  moderated: DS.attr('boolean'),
  parent: DS.belongsTo('flexberry-ember-demo-suggestion-type', { inverse: null, async: false }),
  localizedTypes: DS.hasMany('flexberry-ember-demo-localized-suggestion-type', { inverse: 'suggestionType', async: false }),
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
  modelClass.defineProjection('SuggestionTypeE', 'flexberry-ember-demo-suggestion-type', {
    name: Projection.attr('Название'),
    moderated: Projection.attr('Одобрено'),
    parent: Projection.belongsTo('flexberry-ember-demo-suggestion-type', 'Родитель', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    localizedTypes: Projection.hasMany('flexberry-ember-demo-localized-suggestion-type', 'Локализованные типы', {
      name: Projection.attr('Название'),
      localization: Projection.belongsTo('flexberry-ember-demo-localization', 'Локализация', {
        name: Projection.attr('Name', { hidden: true })
      }, { displayMemberPath: 'name' })
    })
  });
  modelClass.defineProjection('SuggestionTypeL', 'flexberry-ember-demo-suggestion-type', {
    name: Projection.attr('Название'),
    moderated: Projection.attr('Одобрено'),
    parent: Projection.belongsTo('flexberry-ember-demo-suggestion-type', 'Name', {

    }, { hidden: true })
  });
};
