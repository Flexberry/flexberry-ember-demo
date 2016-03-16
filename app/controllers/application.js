import Ember from "ember";

export default Ember.Controller.extend({
  sitemap: {
    nodes: [
      { link: "index", title: "Home" },
      {
        title: "Администрирование",
        children: [
	  {
	    link:null,
	    title:'Типы предложений',
	    children:[
	      { link: "flexberry-ember-demo-suggestion-types", title: "Список" },
	      { link: "flexberry-ember-demo-suggestion-type.new", title: "Добавить" }
	    ]
	  },
	  {
	    link:null,
	    title:'Пользователи',
	    children:[
	      { link: "flexberry-ember-demo-application-users", title: "Список" },
	      { link: "flexberry-ember-demo-application-user.new", title: "Добавить" }
	    ]
	  },
          { link: "users", title: "Application Users" }
        ]
      },
      {
        title: "Предложения",
        children: [
          { link: "flexberry-ember-demo-suggestions", title: "Список" },
          { link: "flexberry-ember-demo-suggestion.new", title: "Добавить" }
        ]
      },
      {
        title: "Разное",
        children: [
          { link: "geolocation", title: "Геолокация" }
        ]
      }
    ]
  },
  actions: {
    toggleSidebar: function(direction) {
      $('.ui.sidebar').sidebar('toggle');
    }
  }
});
