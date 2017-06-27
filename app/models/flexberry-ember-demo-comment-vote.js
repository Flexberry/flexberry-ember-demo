import Ember from 'ember';
import { Model as CommentVoteMixin, defineProjections } from
  '../mixins/regenerated/models/flexberry-ember-demo-comment-vote';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, CommentVoteMixin, {
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      applicationUser: { presence: { message: 'models.flexberry-ember-demo-comment-vote.validations.applicationUser' } },
      comment: { presence: { message: 'models.flexberry-ember-demo-comment-vote.validations.comment' } }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
});
defineProjections(Model);
export default Model;
