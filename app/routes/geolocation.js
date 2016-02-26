import Ember from 'ember';

const undefinedLocation = {
  coords: {
    latitude: '???',
    longitude: '???'
  }
};

export default Ember.Route.extend({
  geolocation: Ember.inject.service(),

  _loc: Ember.Object.extend({
    location: undefinedLocation
  }).create(),

  init: function() {
    this.get('geolocation')
       .watchPosition(
         (ob) => { this._loc.set('location', ob); },
         () => { this._loc.set('location', undefinedLocation); });
  },

  model() {
    return this._loc;
  }
});
