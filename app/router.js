import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('flexberry-ember-demo-suggestion-type', function() {
    this.route('new');
  });
  this.route('suggestionTypes', function() {
    this.route('page', {path: 'page/:page'});
  });
  this.route('suggestions', function() {
    this.route('page', {path: 'page/:page'});
    this.route('new');
  });
  this.route('users', function() {
    this.route('page', {path: 'page/:page'});
  });
  this.route('geolocation');
});

export default Router;
