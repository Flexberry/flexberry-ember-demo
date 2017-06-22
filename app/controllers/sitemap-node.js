import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    hideSidebar: function() {
      Ember.$('.ui.sidebar.main.menu').sidebar('hide');
    },

    /**
      Expand menu items by click.

      @method actions.subMenuEl
    */
    subMenuEl(event) {
      let $this =  Ember.$(event.currentTarget).parent().find('.subMenu:first');
      if ($this.hasClass('hidden-menu')) {
        $this.removeClass('hidden-menu');
        Ember.$(event.target).parent().find('.item-minus:first').removeClass('hidden-menu');
        Ember.$(event.target).parent().find('.item-plus:first').addClass('hidden-menu');
      } else {
        $this.addClass('hidden-menu');
        Ember.$(event.target).parent().find('.item-minus:first').addClass('hidden-menu');
        Ember.$(event.target).parent().find('.item-plus:first').removeClass('hidden-menu');
      }
    }
  }
});
