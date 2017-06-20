/**
  @module ember-flexberry-demo
*/

import Ember from 'ember';
import EditMapRoute from 'ember-flexberry-gis/routes/edit-map';
import MapRouteCswLoaderMixin from 'ember-flexberry-gis/mixins/map-route-csw-loader';
import RedirectMixin from '../mixins/redirect-to-login-mixin';
import moment from 'moment';

/**
  Map edit route.

  @class MapRoute
  @extends EditMapRoute
  @uses EditFormRouteOperationsIndicationMixin, MapRouteCswLoaderMixin
*/
export default EditMapRoute.extend(
  MapRouteCswLoaderMixin,
  RedirectMixin, {
    i18n: Ember.inject.service(),

    translatedSuggestions: Ember.computed('i18n.locale', function() {
      return {
        'address-caption': this.get('i18n').t('forms.flexberry-ember-demo-suggestion-e.address-caption'),
        'text-caption': this.get('i18n').t('forms.flexberry-ember-demo-suggestion-e.text-caption'),
        'date-caption': this.get('i18n').t('forms.flexberry-ember-demo-suggestion-e.date-caption'),
        'moderated-caption': this.get('i18n').t('forms.flexberry-ember-demo-suggestion-e.moderated-caption'),
        'type-caption': this.get('i18n').t('forms.flexberry-ember-demo-suggestion-e.type-caption'),
        'author-caption': this.get('i18n').t('forms.flexberry-ember-demo-suggestion-e.author-caption')
      };
    }),

    model() {
      let _this = this;
      return this.store.findAll('flexberry-ember-demo-suggestion').then(suggestions => {
        let features = [];
        let translatedSuggestions = _this.get('translatedSuggestions');
        suggestions.forEach(function(elem) {
          let geojson = elem.get('polygon');
          if (!Ember.isBlank(geojson)) {
            let points = JSON.parse(geojson);

            if (points.length !== 0) {
              let type;
              if (Ember.isNone(points[0].length)) {
                type = 'Point';
              } else if (Ember.isNone(points[0][0].length)) {
                type = 'LineString';
              } else {
                type = 'Polygon';
              }

              let date = elem.get('date') ? moment(elem.get('date')).format('DD.MM.YYYY') : null;

              let popupContent = `<table><tr><td>${translatedSuggestions['author-caption']}: </td><td>${elem.get('author.name') || '-'}</td></tr>` +
                `<tr><td>${translatedSuggestions['type-caption']}: </td><td>${elem.get('type.name') || '-'}</td></tr>` +
                `<tr><td>${translatedSuggestions['date-caption']}: </td><td>${date || '-'}</td></tr>` +
                `<tr><td>${translatedSuggestions['address-caption']}: </td><td>${elem.get('address') || '-'}</td></tr>` +
                `<tr><td>${translatedSuggestions['text-caption']}: </td><td>${elem.get('text') || '-'}</td></tr>` +
                `<tr><td>${translatedSuggestions['moderated-caption']}: </td><td>${elem.get('moderated')}</td></tr>` +
                `</table>`;

              features.addObject({
                type: 'Feature',
                properties: { suggestionID: elem.get('id'), popupContent: popupContent },
                geometry: {
                  type: `${type}`,
                  coordinates: points
                }
              });
            }
          }
        }, _this);

        let layer = this.store.createRecord('new-platform-flexberry-g-i-s-map-layer', {
          name: 'Map',
          type: 'tile',
          visibility: true,
          settings: '{"url":"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png","showOnMinimap":true}',
          coordinateReferenceSystem: '{"code":"EPSG:3857","definition":null}'
        });

        let layer2 = this.store.createRecord('new-platform-flexberry-g-i-s-map-layer', {
          name: 'Features',
          type: 'geojson',
          visibility: true,
          settings: `{"geojson":${JSON.stringify(features)},"coordsToLatLng":"function(coords) { return L.latLng(coords[0], coords[1]); }",` +
          '"style":"function(feature) { return { opacity: 0.65 }; }","showOnMinimap":true,' +
          '"onEachFeature":"function(feature, layer) { if (feature.properties && feature.properties.popupContent) ' +
          '{ layer.bindPopup(feature.properties.popupContent); } } "}',
          coordinateReferenceSystem: '{"code":"EPSG:3857","definition":null}'
        });

        let mapProject = this.store.createRecord(this.get('modelName'), {
          name: 'Test map',
          lat: 58,
          lng: 56.3,
          zoom: 10,
          coordinateReferenceSystem: '{"code":"EPSG:4326"}',
          mapLayer: Ember.A([layer, layer2])
        });

        return mapProject;
      });
    },
  }
);
