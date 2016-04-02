// import ODataAdapter from 'ember-flexberry/adapters/odata';
// import Proj from 'ember-flexberry-projections';
import Ember from 'ember';
import DS from 'ember-data';
// import config from '../config/environment';
export default DS.JSONAPIAdapter.extend({
	host: 'http://jsonapiserver.local',
	namespace: 'flexberry-ember-demo',
    
//COPY from odata adapter
//   headers: {
//     Prefer: 'return=representation'
//   },

//   idType: 'number',

  getPaginationQuery: function(page, perPage) {
//     let query = { $top: perPage, $skip: (page - 1) * perPage, $count: true };
    let query = { page:{size:perPage, number:(page - 1) * perPage, count: true }};

    return query;
  },

  getSortingQuery: function(sortingInfo, serializer) {
    let query = {};

    if (sortingInfo && sortingInfo.length) {
      query.$orderby = sortingInfo.map(function(element) {
        return serializer.keyForAttribute(element.propName) + ' ' + element.direction;
      }).join(', ');
    }

    return query;
  },

  /**
   * Creates query with given projection name (if not null) and limit function (if not empty).
   *
   * @method getLimitFunctionQuery
   * @param {String} limitFunction Filter to add to query (if empty noting will be added as filter).
   * @param {String} projectionName Projection name to add to query (if empty noting will be added as projection name).
   * @return {Object} Created query.
   */
  getLimitFunctionQuery: function(limitFunction, projectionName) {
    let query = {};
    if (limitFunction && typeof (limitFunction) === 'string' && limitFunction.length > 0) {
      Ember.merge(query, { $filter: limitFunction });
    }

    if (projectionName && typeof (projectionName) === 'string' && projectionName.length > 0) {
      Ember.merge(query, { projection: projectionName });
    }

    return query;
  },
});

// export default ODataAdapter.extend(Proj.Adapter, {
//   host: config.APP.backendUrl,
// }); 


