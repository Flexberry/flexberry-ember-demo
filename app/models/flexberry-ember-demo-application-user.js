import { Model as ApplicationUserMixin, defineProjections } from
  '../mixins/regenerated/models/flexberry-ember-demo-application-user';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ApplicationUserMixin, {

});
defineProjections(Model);
export default Model;
