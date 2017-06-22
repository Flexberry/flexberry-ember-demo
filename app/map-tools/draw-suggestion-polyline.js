/**
  @module ember-flexberry-gis
*/

import Ember from 'ember';
import DrawMapTool from './draw-suggestion';

/**
  Draw polyline map-tool.

  @class DrawPolylineMapTool
  @extends DrawMapTool
*/
export default DrawMapTool.extend({
  /**
    Handles map's 'editable:drawing:end' event.

    @method _drawingDidEnd
    @param {Object} e Event object.
    @param {<a href="http://leafletjs.com/reference-1.0.0.html#rectangle">L.Rectangle</a>} e.layer Drawn rectangle layer.
  */
  _drawingDidEnd({ layer }) {
    this._super(...arguments);

    layer.disableEdit();
    let latlngs = layer._latlngs;
    let geojson = '[';
    latlngs.forEach(function(latlng) {
      geojson += `[${latlng.lat},${latlng.lng}],`;
    });

    geojson = geojson.slice(0, -1) + ']';
    Ember.getOwner(this).lookup('controller:map').transitionToRoute('flexberry-ember-demo-suggestion-e.new', { queryParams: { geojson: geojson } });
  },

  /**
    Enables tool.

    @method _enable
    @private
  */
  _enable() {
    this._super(...arguments);
    this.get('_editTools').startPolyline();
  }
});
