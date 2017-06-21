/**
  @module ember-flexberry-demo
*/

import Ember from 'ember';
import EditMapController from 'ember-flexberry-gis/controllers/edit-map';

/**
  Map controller.

  @class MapController
  @extends EditMapController
  @uses EditFormControllerOperationsIndicationMixin
*/
export default EditMapController.extend({
    /**
      Parameter contains current map identification layer option (all, visible, top etc.)
      @property identifyLayersOption
      @type String
      @default ''
     */
    identifyLayersOption: '',

    /**
      Parameter contains current map identification tool option (arrow, square, polygon etc.)
      @property identifyToolOption
      @type String
      @default ''
     */
    identifyToolOption: '',

    /**
      Parameter contains default map identification layer option (all, visible, top etc.)
      @property _defaultIdentifyLayersOption
      @type String
      @default 'visible'
     */
    _defaultIdentifyLayersOption: 'visible',

    /**
      Parameter contains default map identification tool option (arrow, square, polygon etc.)
      @property _defaultIdentifyToolOption
      @type String
      @default 'rectangle'
     */
    _defaultIdentifyToolOption: 'rectangle',

    serviceLayer: null,

    /**
      Parent route.

      @property parentRoute
      @type String
      @default 'maps'
    */
    parentRoute: 'maps',

    sidebar: Ember.A([{
        selector: 'treeview',
        captionPath: 'forms.map.treeviewbuttontooltip',
        iconClass: 'list icon'
      },
      {
        selector: 'search',
        captionPath: 'forms.map.searchbuttontooltip',
        iconClass: 'search icon'
      },
      {
        selector: 'identify',
        captionPath: 'forms.map.identifybuttontooltip',
        iconClass: 'info icon',
        class: 'identify'
      },
      {
        selector: 'bookmarks',
        captionPath: 'forms.map.bookmarksbuttontooltip',
        iconClass: 'bookmark icon'
      }
    ]),

    /**
     * items
     */
    sidebarItems: Ember.computed('sidebar.[]', 'sidebar.@each.active', 'i18n.locale', function () {
      let i18n = this.get('i18n');
      let sidebar = this.get('sidebar');

      let result = Ember.A(sidebar);
      result.forEach((item) => {
        let caption = Ember.get(item, 'caption');
        let captionPath = Ember.get(item, 'captionPath');

        if (!caption && captionPath) {
          Ember.set(item, 'caption', i18n.t(captionPath));
        }
      });

      return result;
    }),

    availableCRS: Ember.computed('i18n.locale', function () {
      let availableModes = Ember.A();
      let i18n = this.get('i18n');
      availableModes.push({
        crs: this.get('model.crs'),
        name: i18n.t('forms.crs.current.name').toString(),
        xCaption: i18n.t('forms.crs.current.xCaption').toString(),
        yCaption: i18n.t('forms.crs.current.yCaption').toString(),
        latlng: false
      });
      availableModes.push({
        crs: L.CRS.EPSG4326,
        name: i18n.t('forms.crs.latlng.name').toString(),
        xCaption: i18n.t('forms.crs.latlng.xCaption').toString(),
        yCaption: i18n.t('forms.crs.latlng.yCaption').toString(),
        isLatlng: true
      });

      return availableModes;
    }),

    actions: {
      toggleSidebar(sidebar, context, e) {
        if (!e.changed) {
          Ember.$(sidebar)
            .sidebar({
              context: Ember.$(context),
              dimPage: false,
              closable: false
            })
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('toggle');

          if (e.tabName === 'identify') {
            if (Ember.isBlank(this.get('identifyLayersOption'))) {
              this.set('identifyLayersOption', this.get('_defaultIdentifyLayersOption'));
            }

            if (Ember.isBlank(this.get('identifyToolOption'))) {
              this.set('identifyToolOption', this.get('_defaultIdentifyToolOption'));
            }
          }
        }
      },

      querySearch(queryString) {
        let leafletMap = this.get('leafletMap');
        let e = {
          latlng: leafletMap.getCenter(),
          searchOptions: {
            queryString,
            maxResultsCount: 10
          },
          filter(layerModel) {
            return layerModel.get('canBeSearched') && layerModel.get('visibility');
          },
          results: Ember.A()
        };

        leafletMap.fire('flexberry-map:search', e);

        this.set('searchResults', e.results);
      },

      clearSearch() {
        this.set('searchResults', null);
      },

      clearIdentification() {
        this.set('identifyResults', null);
      },

      /**
          Handles 'flexberry-maptoolbar:identificationFinished' event of leaflet map.

          @method identificationFinished
          @param {Object} e Event object.
          @param {Object} results Hash containing search results.
          @param {Object[]} results.features Array containing (GeoJSON feature-objects)[http://geojson.org/geojson-spec.html#feature-objects]
          or a promise returning such array.
      */
      onIdentificationFinished(e) {
        let serviceLayer = this.get('serviceLayer');
        if (!serviceLayer) {
          let leafletMap = this.get('leafletMap');
          this.set('serviceLayer', L.featureGroup().addTo(leafletMap));
        } else {
          serviceLayer.clearLayers();
        }

        this.set('identifyResults', e.results);

        // below is kind of madness, but if you want sidebar to move on identification finish - do that
        if (this.get('sidebar.2.active') !== true) {
          this.set('sidebar.2.active', true);
        }

        if (!Ember.$('.right.sidebar').hasClass('visible')) {
          this.send('toggleSidebar', '.right.sidebar', '.mappanel', {
            changed: false
          });
        }
      }
    }
  });