/**
  @module ember-flexberry-gis
*/

import Ember from 'ember';
import BaseLayer from 'ember-flexberry-gis/layers/-private/base';

/**
  Class describing WFS layer metadata.

  @class WfsLayer
  @extends BaseLayer
*/
export default BaseLayer.extend({
  /**
    Permitted operations related to layer type.

    @property operations
    @type String[]
    @default ['edit', 'remove', 'identify', 'search', 'legend']
  */
  operations: ['edit', 'remove', 'identify', 'search', 'legend'],

  /**
    Creates new settings object (with settings related to layer-type).

    @method createSettings
    @returns {Object} New settings object (with settings related to layer-type).
  */
  createSettings() {
    let settings = this._super(...arguments);
    Ember.$.extend(true, settings, {
      pointToLayer: undefined,
      style: undefined,
      onEachFeature: undefined,
      filter: undefined,
      coordsToLatLng: undefined,
      geojson: undefined
    });

    return settings;
  },

  /**
    Creates new search settings object (with search settings related to layer-type).

    @method createSearchSettings
    @returns {Object} New search settings object (with search settings related to layer-type).
  */
  createSearchSettings() {
    let settings = this._super(...arguments);
    Ember.$.extend(true, settings, {
      queryString: '',
      maxResultsCount: 10
    });

    return settings;
  }
});
