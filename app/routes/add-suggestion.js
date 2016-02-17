import Ember from 'ember';

export default Ember.Route.extend({
  model() {
//     return this.store.findAll('flexberry-ember-demo-suggestion');
      return [
        {
            'id':1,
            'name':'Фонтан',
            'Moderated':true
        },{
           'id':2,
            'name':'Ресторан',
            'Moderated':true
        },{
        }
      ];
  }
});
