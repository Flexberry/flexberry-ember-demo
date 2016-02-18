import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('suggestionTypes');
  this.route('suggestions', function() {
    this.route('page', {path: 'page/:page'});
    this.route('new');
  });
  this.route('users', function() {
    this.route('page', {path: 'page/:page'});
  });
});

export default Router;
