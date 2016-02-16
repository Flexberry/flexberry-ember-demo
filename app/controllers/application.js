import Ember from 'ember';

export default Ember.Controller.extend({
  sitemap: {
    nodes: [
      {
        link: 'index',
        title: 'Home',
        children: null
      },
      {
        link: null,
        title: 'Admin panel',
        children: [
          {
            link: 'suggestionTypes',
            title: 'Suggestion Types',
            children: null
          },
          {
            link: 'users',
            title: 'Application Users',
            children: null
          }
        ]
      }
    ]
  }
});
