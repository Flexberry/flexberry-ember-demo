import DS from 'ember-data';
import BaseModel from 'ember-flexberry/models/base';
import Proj from 'ember-flexberry-projections';

var Model = BaseModel.extend({
  text: DS.attr('string'),
  votes: DS.attr('number'),
  moderated: DS.attr('boolean'),
  author: DS.belongsTo('flexberry-ember-demo-application-user', {inverse: null, async: false}),
  userVotes: DS.hasMany('flexberry-ember-demo-comment-vote', {inverse: null, async: false}),
  validations: {}
});

Model.defineProjection('CommentE', 'flexberry-ember-demo-comment', {
  text: Proj.attr('Text'),
  votes: Proj.attr('Votes'),
  moderated: Proj.attr('Moderated'),
  author: Proj.belongsTo('flexberry-ember-demo-application-user', 'Author', {
    name: Proj.attr('Name', {hidden: true})
  }),
  userVotes: Proj.hasMany('flexberry-ember-demo-comment-vote', 'User votes', {
    voteType: Proj.attr('Vote type'),
    applicationUser: Proj.belongsTo('flexberry-ember-demo-application-user', 'Application user', {
      name: Proj.attr('Name', {hidden: true})
    })
  })
});

export default Model;
