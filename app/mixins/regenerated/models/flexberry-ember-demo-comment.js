import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  text: DS.attr('string'),
  votes: DS.attr('number'),
  moderated: DS.attr('boolean'),
  author: DS.belongsTo('flexberry-ember-demo-application-user', { inverse: null, async: false }),
  suggestion: DS.belongsTo('flexberry-ember-demo-suggestion', { inverse: 'comments', async: false }),
  userVotes: DS.hasMany('flexberry-ember-demo-comment-vote', { inverse: 'comment', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      author: { presence: true },
      suggestion: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CommentE', 'flexberry-ember-demo-comment', {
    text: Projection.attr('Текст'),
    votes: Projection.attr('Голоса'),
    moderated: Projection.attr('Одобрен'),
    author: Projection.belongsTo('flexberry-ember-demo-application-user', 'Автор', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    userVotes: Projection.hasMany('flexberry-ember-demo-comment-vote', 'Голоса пользователей', {
      voteType: Projection.attr('Тип голосования'),
      applicationUser: Projection.belongsTo('flexberry-ember-demo-application-user', 'Пользователь приложения', {
        name: Projection.attr('Name', { hidden: true })
      }, { displayMemberPath: 'name' })
    })
  });
};
