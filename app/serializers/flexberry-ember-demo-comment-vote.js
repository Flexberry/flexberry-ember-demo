import { Serializer as CommentVoteSerializer } from
  '../mixins/regenerated/serializers/flexberry-ember-demo-comment-vote';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CommentVoteSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
