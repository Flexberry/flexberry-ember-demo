import Ember from 'ember';
import BaseLegendComponent from 'ember-flexberry-gis/components/legends/base-legend';

/**
  Component representing map layer's legend for geojson-layers.

  @class GeojsonLegendComponent
  @extends BaseLegendComponent
*/
export default BaseLegendComponent.extend({
  /**
    Array of legend's for layer.
    Every legend is an object with following structure { src: ... },
    where 'src' is legend's image source (url or base64-string).

    @property _legends
    @type Object[]
    @private
    @readOnly
  */
  _legends: Ember.computed(function() {
    // TODO: Implement client-side legends rendering for geojson-layers & extend.
    return Ember.A();
  })
});
