import DS from 'ember-data';
import BaseModel from 'ember-flexberry/models/base';
import Proj from 'ember-flexberry-projections';

var Model = BaseModel.extend({
  order: DS.attr('number'),
  file: DS.attr('string'),
  validations: {}
});

Model.defineProjection('SuggestionFileE', 'flexberry-ember-demo-suggestion-file', {
  order: Proj.attr('Order'),
  file: Proj.attr('File')
});

export default Model;
