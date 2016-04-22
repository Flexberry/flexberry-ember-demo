import DS from 'ember-data';
import BaseModel from 'ember-flexberry/models/base';
import Proj from 'ember-flexberry-projections';

var Model = BaseModel.extend({
    address: DS.attr('string'),
    text: DS.attr('string'),
    date: DS.attr('date'),
    votes: DS.attr('number'),
    moderated: DS.attr('boolean'),
    type: DS.belongsTo('flexberry-ember-demo-suggestion-type', { inverse: null, async: false }),
    author: DS.belongsTo('flexberry-ember-demo-application-user', { inverse: null, async: false }),
    comments: DS.hasMany('flexberry-ember-demo-comment', { inverse: 'suggestion', async: false }),
    files: DS.hasMany('flexberry-ember-demo-suggestion-file', { inverse: 'suggestion', async: false }),
    userVotes: DS.hasMany('flexberry-ember-demo-vote', { inverse: 'suggestion', async: false }),
    validations: { 
 
 }
});

Model.defineProjection('SuggestionE', 'flexberry-ember-demo-suggestion', {
address: Proj.attr('Address'),

 text: Proj.attr('Text'),
 date: Proj.attr('Date'),
 votes: Proj.attr('Votes'),
 moderated: Proj.attr('Moderated'),
 type: Proj.belongsTo('flexberry-ember-demo-suggestion-type', 'Type', { 
      name: Proj.attr('Name') 
      }),
 author: Proj.belongsTo('flexberry-ember-demo-application-user', 'Author', { 
      name: Proj.attr('Name') 
      }),
 comments: Proj.hasMany('flexberry-ember-demo-comment', 'Comments', {
text: Proj.attr('Text'),
 votes: Proj.attr('Votes'),
 moderated: Proj.attr('Moderated'),
 author: Proj.belongsTo('flexberry-ember-demo-application-user', 'Author', { 
            name: Proj.attr('Name', { hidden: true }) 
            }),
 userVotes: Proj.hasMany('flexberry-ember-demo-comment-vote', 'User votes', {
voteType: Proj.attr('Vote type'),
 applicationUser: Proj.belongsTo('flexberry-ember-demo-application-user', 'Application user', { 
name: Proj.attr('Name', { hidden: true }) 
})
})
}),
    files: Proj.hasMany('flexberry-ember-demo-suggestion-file', 'Files', {
order: Proj.attr('Order'),
    file: Proj.attr('File')
}),
    userVotes: Proj.hasMany('flexberry-ember-demo-vote', 'User votes', {
voteType: Proj.attr('Vote type'),

 applicationUser: Proj.belongsTo('flexberry-ember-demo-application-user', 'Application user', { 
            name: Proj.attr('Name', { hidden: true }) 
            })
})
});
    Model.defineProjection('SuggestionL', 'flexberry-ember-demo-suggestion', {
address: Proj.attr('Address'),

 text: Proj.attr('Text'),
 date: Proj.attr('Date'),
 votes: Proj.attr('Votes'),
 moderated: Proj.attr('Moderated'),
 type: Proj.belongsTo('flexberry-ember-demo-suggestion-type', 'Name', { 
      name: Proj.attr('Name') 
      }),
 author: Proj.belongsTo('flexberry-ember-demo-application-user', 'Name', { 
      name: Proj.attr('Name') 
      })
});

export default Model;
