import DS from 'ember-data';
import BaseModel from 'ember-flexberry/models/base';
import Proj from 'ember-flexberry-projections';

var Model = BaseModel.extend({
    name: DS.attr('string'),
    localization: DS.belongsTo('flexberry-ember-demo-localization', { inverse: null, async: false }),
    suggestionType: DS.belongsTo('flexberry-ember-demo-suggestion-type', { inverse: 'localizedTypes', async: false }),
    validations: { 
 name: { presence: true }
 }
});

Model.defineProjection('LocalizedSuggestionTypeE', 'flexberry-ember-demo-localized-suggestion-type', {
name: Proj.attr('Name'),
    localization: Proj.belongsTo('flexberry-ember-demo-localization', 'Localization', { 
    name: Proj.attr('Name', { hidden: true }) 
    })
});

export default Model;
