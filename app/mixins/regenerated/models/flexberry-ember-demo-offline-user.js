import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  /**
    Non-stored property.

    @property login
  */
  login: DS.attr('string'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'loginCompute' method in model class (outside of this mixin) if you want to compute value of 'login' property.

    @method _loginCompute
    @private
    @example
      ```javascript
      _loginChanged: Ember.on('init', Ember.observer('login', function() {
        Ember.run.once(this, '_loginCompute');
      }))
      ```
  */
  _loginCompute: function() {
    let result = (this.loginCompute && typeof this.loginCompute === 'function') ? this.loginCompute() : null;
    this.set('login', result);
  },
  /**
    Non-stored property.

    @property password
  */
  password: DS.attr('string'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'passwordCompute' method in model class (outside of this mixin) if you want to compute value of 'password' property.

    @method _passwordCompute
    @private
    @example
      ```javascript
      _passwordChanged: Ember.on('init', Ember.observer('password', function() {
        Ember.run.once(this, '_passwordCompute');
      }))
      ```
  */
  _passwordCompute: function() {
    let result = (this.passwordCompute && typeof this.passwordCompute === 'function') ? this.passwordCompute() : null;
    this.set('password', result);
  },
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('OfflineUserE', 'flexberry-ember-demo-offline-user', {
    login: Projection.attr('Логин'),
    password: Projection.attr('Пароль')
  });
};
