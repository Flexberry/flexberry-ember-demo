import DS from 'ember-data';
import BaseModel from 'ember-flexberry/models/base';
import Proj from 'ember-flexberry-projections';

var Model = BaseModel.extend({
    name: DS.attr('string'),
    validations: { 
 name: { presence: true }
 }
});

Model.defineProjection('LocalizationE', 'flexberry-ember-demo-localization', {
name: Proj.attr('Name')
});
    Model.defineProjection('LocalizationL', 'flexberry-ember-demo-localization', {
name: Proj.attr('Name')
});

export default Model;
