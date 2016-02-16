import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('suggestionTypes', function() {
    this.route('page', {path: 'page/:page'});
  });
<<<<<<< HEAD
  this.route('addSuggestion');
=======
  this.route('suggestions', function() {
    this.route('page', {path: 'page/:page'});
  });
  this.route('users', function() {
    this.route('page', {path: 'page/:page'});
  });
>>>>>>> e7dfbdcdd04a033ac5202c52c79687e768709d3f
});

export default Router;
