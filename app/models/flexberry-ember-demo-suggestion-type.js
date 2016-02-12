import DS from 'ember-data';
import BaseModel from 'ember-flexberry/models/base';
import Proj from 'ember-flexberry-projections';

var Model = BaseModel.extend({
  name: DS.attr('string'),
  moderated: DS.attr('boolean'),
  parent: DS.belongsTo('flexberry-ember-demo-suggestion-type', {inverse: null, async: false}),
  localizedTypes: DS.hasMany('flexberry-ember-demo-localized-suggestion-type', {inverse: null, async: false}),
  validations: {
    name: {presence: true}
  }
});

Model.defineProjection('SuggestionTypeE', 'flexberry-ember-demo-suggestion-type', {
  name: Proj.attr('Name'),
  moderated: Proj.attr('Moderated'),
  parent: Proj.belongsTo('flexberry-ember-demo-suggestion-type', 'Parent', {
    name: Proj.attr('Name')
  }),
  localizedTypes: Proj.hasMany('flexberry-ember-demo-localized-suggestion-type', 'Localized types', {
    name: Proj.attr('Name'),
    localization: Proj.belongsTo('flexberry-ember-demo-localization', 'Localization', {
      name: Proj.attr('Name', {hidden: true})
    })
  })
});
Model.defineProjection('SuggestionTypeL', 'flexberry-ember-demo-suggestion-type', {
  name: Proj.attr('Name'),
  moderated: Proj.attr('Moderated'),
  parent: Proj.belongsTo('flexberry-ember-demo-suggestion-type', 'Name', {}, {hidden: true})
});

export default Model;
