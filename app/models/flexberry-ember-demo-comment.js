import Ember from 'ember';
import { Model as CommentMixin, defineProjections } from
  '../mixins/regenerated/models/flexberry-ember-demo-comment';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, CommentMixin, {
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      author: { presence: { message: 'models.flexberry-ember-demo-comment.validations.author' } },
      suggestion: { presence: { message: 'models.flexberry-ember-demo-comment.validations.suggestion' } }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
});
defineProjections(Model);
export default Model;
