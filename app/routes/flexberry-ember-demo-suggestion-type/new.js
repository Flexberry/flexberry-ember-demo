import EditFormNewRoute from 'ember-flexberry/routes/edit-form-new';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default EditFormNewRoute.extend(/*AuthenticatedRouteMixin,*/ {
  modelProjection: 'SuggestionTypeE',
  modelName: 'flexberry-ember-demo-suggestion-type'
});

