import { Serializer as SuggestionFileSerializer } from
  '../mixins/regenerated/serializers/flexberry-ember-demo-suggestion-file';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SuggestionFileSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
