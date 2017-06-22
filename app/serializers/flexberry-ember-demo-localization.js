import { Serializer as LocalizationSerializer } from
  '../mixins/regenerated/serializers/flexberry-ember-demo-localization';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(LocalizationSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
