import { Model as CommentVoteMixin, defineProjections } from
  '../mixins/regenerated/models/flexberry-ember-demo-comment-vote';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, CommentVoteMixin, {

});
defineProjections(Model);
export default Model;
