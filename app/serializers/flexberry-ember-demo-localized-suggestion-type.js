import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
// attrs: {
// localization: { serialize: 'odata-id', deserialize: 'records' },
// suggestionType: { serialize: 'odata-id', deserialize: 'records' }
// },
/**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
