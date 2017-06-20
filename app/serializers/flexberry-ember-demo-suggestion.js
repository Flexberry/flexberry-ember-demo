import { Serializer as SuggestionSerializer } from
  '../mixins/regenerated/serializers/flexberry-ember-demo-suggestion';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SuggestionSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
