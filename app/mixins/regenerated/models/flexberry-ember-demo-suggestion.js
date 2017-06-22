import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  address: DS.attr('string'),
  text: DS.attr('string'),
  date: DS.attr('date'),
  votes: DS.attr('number'),
  moderated: DS.attr('boolean'),
  polygon: DS.attr('string'),
  type: DS.belongsTo('flexberry-ember-demo-suggestion-type', { inverse: null, async: false }),
  author: DS.belongsTo('flexberry-ember-demo-application-user', { inverse: null, async: false }),
  comments: DS.hasMany('flexberry-ember-demo-comment', { inverse: 'suggestion', async: false }),
  files: DS.hasMany('flexberry-ember-demo-suggestion-file', { inverse: 'suggestion', async: false }),
  userVotes: DS.hasMany('flexberry-ember-demo-vote', { inverse: 'suggestion', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      type: { presence: true },
      author: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SuggestionE', 'flexberry-ember-demo-suggestion', {
    address: Projection.attr('Адрес'),
    text: Projection.attr('Текст'),
    polygon: Projection.attr('Полигон'),
    date: Projection.attr('Дата'),
    votes: Projection.attr('Голоса'),
    moderated: Projection.attr('Одобрено'),
    type: Projection.belongsTo('flexberry-ember-demo-suggestion-type', 'Тип', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    author: Projection.belongsTo('flexberry-ember-demo-application-user', 'Автор', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    comments: Projection.hasMany('flexberry-ember-demo-comment', 'Комментарии', {
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
    }),
    files: Projection.hasMany('flexberry-ember-demo-suggestion-file', 'Файлы', {
      order: Projection.attr('Порядок'),
      file: Projection.attr('Файл')
    }),
    userVotes: Projection.hasMany('flexberry-ember-demo-vote', 'Голоса пользователей', {
      voteType: Projection.attr('Тип голосования'),
      applicationUser: Projection.belongsTo('flexberry-ember-demo-application-user', 'Пользователь приложения', {
        name: Projection.attr('Name', { hidden: true })
      }, { displayMemberPath: 'name' })
    })
  });
  modelClass.defineProjection('SuggestionL', 'flexberry-ember-demo-suggestion', {
    address: Projection.attr('Адрес'),
    text: Projection.attr('Текст'),
    date: Projection.attr('Дата'),
    votes: Projection.attr('Голоса'),
    moderated: Projection.attr('Одобрено'),
    type: Projection.belongsTo('flexberry-ember-demo-suggestion-type', 'Тип предложения', {
      name: Projection.attr('Тип предложения')
    }, { hidden: true }),
    author: Projection.belongsTo('flexberry-ember-demo-application-user', 'Автор', {
      name: Projection.attr('Автор')
    }, { hidden: true }),
    polygon: Projection.attr('', { hidden: true })
  });
};
