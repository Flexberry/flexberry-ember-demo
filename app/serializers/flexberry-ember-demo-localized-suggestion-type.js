import { Serializer as LocalizedSuggestionTypeSerializer } from
  '../mixins/regenerated/serializers/flexberry-ember-demo-localized-suggestion-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(LocalizedSuggestionTypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
