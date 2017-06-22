import { Serializer as ApplicationUserSerializer } from
  '../mixins/regenerated/serializers/flexberry-ember-demo-application-user';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ApplicationUserSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
