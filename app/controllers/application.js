import Ember from "ember";

export default Ember.Controller.extend({
  sitemap: {
    nodes: [
      { link: "index", title: "Home" },
      {
        title: "Admin panel",
        children: [
          { link: "suggestionTypes", title: "Suggestion Types" },
          { link: "users", title: "Application Users" }
        ]
      },
      { link: "suggestions.new", title: "Добавить предложение" },
      {
        title: "Разное",
        children: [
          { link: "geolocation", title: "Геолокация" }
        ]
      }
    ]
  }
});
