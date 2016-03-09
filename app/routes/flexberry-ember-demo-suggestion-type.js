import EditFormRoute from 'ember-flexberry/routes/edit-form';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default EditFormRoute.extend(/*AuthenticatedRouteMixin,*/ {
  modelProjection: 'SuggestionTypeE',
  modelName: 'flexberry-ember-demo-suggestion-type'
});
