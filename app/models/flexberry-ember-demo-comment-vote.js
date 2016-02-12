import DS from 'ember-data';
import BaseModel from 'ember-flexberry/models/base';
import Proj from 'ember-flexberry-projections';

var Model = BaseModel.extend({
  voteType: DS.attr('flexberry-ember-demo-vote-type'),
  applicationUser: DS.belongsTo('flexberry-ember-demo-application-user', {inverse: null, async: false}),
  validations: {}
});

Model.defineProjection('CommentVoteE', 'flexberry-ember-demo-comment-vote', {
  voteType: Proj.attr('Vote type'),
  applicationUser: Proj.belongsTo('flexberry-ember-demo-application-user', 'Application user', {
    name: Proj.attr('Name', {hidden: true})
  })
});

export default Model;
