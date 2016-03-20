import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service('session'),
	sitemap: {
		nodes: [{
				link: 'index',
				title: 'Home',
				children: null
			}, {
				link: null,
				title: 'Objects',
				children: [{
						link: 'flexberry-ember-demo-application-user-l',
						title: 'Application user',
						children: null
					},
					{
						link: 'flexberry-ember-demo-localization-l',
						title: 'Localization',
						children: null
					},
					{
						link: 'flexberry-ember-demo-suggestion-l',
						title: 'Suggestion',
						children: null
					},
					{
						link: 'flexberry-ember-demo-suggestion-type-l',
						title: 'Suggestion type',
						children: null
					}
				]
			}
		]
	},
	actions: {
		toggleSidebar: function() {
			$('.ui.sidebar').sidebar('toggle');
		}
	}
}
); 
