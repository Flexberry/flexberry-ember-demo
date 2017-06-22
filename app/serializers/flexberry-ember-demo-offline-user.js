import { Serializer as OfflineUserSerializer } from
  '../mixins/regenerated/serializers/flexberry-ember-demo-offline-user';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(OfflineUserSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
