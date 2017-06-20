import { Model as LocalizedSuggestionTypeMixin, defineProjections } from
  '../mixins/regenerated/models/flexberry-ember-demo-localized-suggestion-type';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, LocalizedSuggestionTypeMixin, {

});
defineProjections(Model);
export default Model;
