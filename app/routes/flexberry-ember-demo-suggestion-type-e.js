import EditFormRoute from 'ember-flexberry/routes/edit-form';
import RedirectMixin from '../mixins/redirect-to-login-mixin';

export default EditFormRoute.extend(RedirectMixin, {
  modelProjection: 'SuggestionTypeE',
  modelName: 'flexberry-ember-demo-suggestion-type'
});
