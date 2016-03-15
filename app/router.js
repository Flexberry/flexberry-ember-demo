import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('flexberry-ember-demo-suggestion-types');
    this.route('flexberry-ember-demo-suggestion-types.page',{path: 'flexberry-ember-demo-suggestion-types/:page'});
    
    this.route('flexberry-ember-demo-suggestion-type',{path:'flexberry-ember-demo-suggestion-type/:id'}); 
    this.route('flexberry-ember-demo-suggestion-type.new',{path:'flexberry-ember-demo-suggestion-type/new'}); 
    
    this.route('flexberry-ember-demo-suggestions');  
    this.route('flexberry-ember-demo-suggestions.page',{path: 'page/:page'});
    
    this.route('flexberry-ember-demo-suggestion', {path:'flexberry-ember-demo-suggestion/:id'});
    this.route('flexberry-ember-demo-suggestion.new', {path:'flexberry-ember-demo-suggestion/new'});

    this.route('flexberry-ember-demo-application-users');
    this.route('flexberry-ember-demo-application-users.page',{path: 'flexberry-ember-demo-application-users/:page'});
    
    this.route('flexberry-ember-demo-application-user');
    this.route('flexberry-ember-demo-application-user.new',{path: 'flexberry-ember-demo-application-users/new'});
    
    
//     this.route('suggestionTypes', function() {
//       this.route('page', {path: 'page/:page'});
//     });
  //   this.route('suggestions', function() {
  //     this.route('page', {path: 'page/:page'});
  //   });
  //   this.route('suggestions.new');
    this.route('users', function() {
      this.route('page', {path: 'page/:page'});
    });
    this.route('geolocation');
});

export default Router;
