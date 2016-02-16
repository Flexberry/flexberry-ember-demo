import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('suggestionTypes', function() {
    this.route('page', {path: 'page/:page'});
  });
  this.route('addSuggestion');
});

export default Router;
