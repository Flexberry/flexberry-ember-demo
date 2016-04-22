import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
// attrs: {
// applicationUser: { serialize: 'odata-id', deserialize: 'records' },
// suggestion: { serialize: 'odata-id', deserialize: 'records' }
// },
/**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
