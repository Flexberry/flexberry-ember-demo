import EditFormRoute from 'ember-flexberry/routes/edit-form';

export default EditFormRoute.extend(/*AuthenticatedRouteMixin,*/ {
  modelProjection: 'SuggestionTypeE',
  modelName: 'flexberry-ember-demo-suggestion-type'
}); 
