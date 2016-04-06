import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
// attrs: {
// author: { serialize: 'odata-id', deserialize: 'records' },
// suggestion: { serialize: 'odata-id', deserialize: 'records' },
// userVotes: { serialize: false, deserialize: 'records' }
// },
/**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
