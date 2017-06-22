import Ember from 'ember';

export let OfflineSerializer = Ember.Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      type: { serialize: 'id', deserialize: 'records' },
      author: { serialize: 'id', deserialize: 'records' },
      comments: { serialize: 'ids', deserialize: 'records' },
      files: { serialize: 'ids', deserialize: 'records' },
      userVotes: { serialize: 'ids', deserialize: 'records' }
    };

    return Ember.$.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
