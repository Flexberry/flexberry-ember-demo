import { Model as LocalizationMixin, defineProjections } from
  '../mixins/regenerated/models/flexberry-ember-demo-localization';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, LocalizationMixin, {

});
defineProjections(Model);
export default Model;
