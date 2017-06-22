import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  voteType: DS.attr('flexberry-ember-demo-vote-type'),
  applicationUser: DS.belongsTo('flexberry-ember-demo-application-user', { inverse: null, async: false }),
  suggestion: DS.belongsTo('flexberry-ember-demo-suggestion', { inverse: 'userVotes', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      applicationUser: { presence: true },
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
  modelClass.defineProjection('VoteE', 'flexberry-ember-demo-vote', {
    voteType: Projection.attr('Тип голосования'),
    applicationUser: Projection.belongsTo('flexberry-ember-demo-application-user', 'Пользователь приложения', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' })
  });
};
