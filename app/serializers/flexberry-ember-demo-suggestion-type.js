import { Serializer as SuggestionTypeSerializer } from
  '../mixins/regenerated/serializers/flexberry-ember-demo-suggestion-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SuggestionTypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
