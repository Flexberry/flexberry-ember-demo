import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
// attrs: {
// type: { serialize: 'odata-id', deserialize: 'records' },
// author: { serialize: 'odata-id', deserialize: 'records' },
// comments: { serialize: false, deserialize: 'records' },
// files: { serialize: false, deserialize: 'records' },
// userVotes: { serialize: false, deserialize: 'records' }
// },
/**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
