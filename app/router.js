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
});

export default Router;
