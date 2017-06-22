import { Model as CommentMixin, defineProjections } from
  '../mixins/regenerated/models/flexberry-ember-demo-comment';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, CommentMixin, {

});
defineProjections(Model);
export default Model;
