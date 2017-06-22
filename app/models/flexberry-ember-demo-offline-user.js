import { Model as OfflineUserMixin, defineProjections } from
  '../mixins/regenerated/models/flexberry-ember-demo-offline-user';
import { Projection } from 'ember-flexberry-data';
let Model = Projection.Model.extend(OfflineUserMixin, {

});
defineProjections(Model);
export default Model;
