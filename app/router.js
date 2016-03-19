import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function () {
// /login
this.route('login');

this.route('flexberry-ember-demo-application-user-l');
this.route('flexberry-ember-demo-application-user', { path: 'flexberry-ember-demo-application-user-e/:id' });
//this.route('flexberry-ember-demo-application-user-e', { path: 'flexberry-ember-demo-application-user-l/:id' });
this.route('flexberry-ember-demo-application-user.new', { path: 'flexberry-ember-demo-application-user-e/new' });
//this.route('flexberry-ember-demo-application-user-e.new', { path: 'flexberry-ember-demo-application-user-l/new' });

this.route('flexberry-ember-demo-localization-l');
this.route('flexberry-ember-demo-localization', { path: 'flexberry-ember-demo-localization-e/:id' });
// this.route('flexberry-ember-demo-localization-e', { path: 'flexberry-ember-demo-localization-l/:id' });
this.route('flexberry-ember-demo-localization.new', { path: 'flexberry-ember-demo-localization-e/new' });
//this.route('flexberry-ember-demo-localization-e.new', { path: 'flexberry-ember-demo-localization-l/new' });

this.route('flexberry-ember-demo-suggestion-l');
this.route('flexberry-ember-demo-suggestion', { path: 'flexberry-ember-demo-suggestion-e/:id' });
//this.route('flexberry-ember-demo-suggestion-e', { path: 'flexberry-ember-demo-suggestion-l/:id' });
this.route('flexberry-ember-demo-suggestion.new', { path: 'flexberry-ember-demo-suggestion-e/new' });
//this.route('flexberry-ember-demo-suggestion-e.new', { path: 'flexberry-ember-demo-suggestion-l/new' });

this.route('flexberry-ember-demo-suggestion-type-l');
this.route('flexberry-ember-demo-suggestion-type',{path:'flexberry-ember-demo-suggestion-type-e/:id'}); 
//   this.route('flexberry-ember-demo-suggestion-type-e', { path: 'flexberry-ember-demo-suggestion-type-l/:id' });
this.route('flexberry-ember-demo-suggestion-type.new', { path: 'flexberry-ember-demo-suggestion-type-e/new' });
//this.route('flexberry-ember-demo-suggestion-type-e.new', { path: 'flexberry-ember-demo-suggestion-type-l/new' });

});

export default Router; 
