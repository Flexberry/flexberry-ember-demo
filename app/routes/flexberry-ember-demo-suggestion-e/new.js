import EditFormNewRoute from 'ember-flexberry/routes/edit-form-new';

export default EditFormNewRoute.extend({
  modelProjection: 'SuggestionE',
  modelName: 'flexberry-ember-demo-suggestion',
  templateName: 'flexberry-ember-demo-suggestion-e',
  developerUserSettings: {
    commentsGroupEdit: {
      DEFAULT: {
        columnWidths: [{ propName: 'OlvRowToolbar', fixed: true, width: 50 }]
      }
    },
    filesGroupEdit: {
      DEFAULT: {
        columnWidths: [{ propName: 'OlvRowToolbar', fixed: true, width: 50 }]
      }
    },
    userVotesGroupEdit: {
      DEFAULT: {
        columnWidths: [{ propName: 'OlvRowToolbar', fixed: true, width: 50 }]
      }
    }
  },

  /**
    A hook you can implement to convert the URL into the model for this route.
    [More info](http://emberjs.com/api/classes/Ember.Route.html#method_model).

    @method model
    @param {Object} params
    @param {Object} transition
   */
  model(params) {
    let record = this._super(...arguments);
    record.set('polygon', params.geojson);
    record.set('date', new Date());

    return record;
  },

  /**
    A hook you can use to setup the controller for the current route.
    [More info](http://emberjs.com/api/classes/Ember.Route.html#method_setupController).

    @method setupController
    @param {<a href="http://emberjs.com/api/classes/Ember.Controller.html">Ember.Controller</a>} controller
    @param {Object} model
  */
  setupController: function(controller) {
    this._super(...arguments);

    controller.set('geojson', null);
  }
});
