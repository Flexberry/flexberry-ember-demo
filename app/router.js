import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('suggestionTypes');
  this.route('suggestions');
  this.route('suggestions.new', {path: 'suggestions/new'});
  this.route('users');
  this.route('geolocation');

  this.route('flexberry-ember-demo-suggestion-type', function() {
    this.route('new');
  });
});

export default Router;
