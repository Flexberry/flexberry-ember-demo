import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  login: DS.attr('string'),
  eMail: DS.attr('string'),
  phone1: DS.attr('string'),
  phone2: DS.attr('string'),
  phone3: DS.attr('string'),
  activated: DS.attr('boolean'),
  vK: DS.attr('string'),
  facebook: DS.attr('string'),
  twitter: DS.attr('string'),
  birthday: DS.attr('date'),
  gender: DS.attr('flexberry-ember-demo-gender'),
  vip: DS.attr('boolean'),
  karma: DS.attr('decimal'),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      name: { presence: true },
      login: { presence: true },
      eMail: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ApplicationUserE', 'flexberry-ember-demo-application-user', {
    name: Projection.attr('Имя'),
    login: Projection.attr('Логин'),
    eMail: Projection.attr('E mail'),
    phone1: Projection.attr('Номер телефона 1'),
    phone2: Projection.attr('Номер телефона 2'),
    phone3: Projection.attr('Номер телефона 3'),
    activated: Projection.attr('Активен'),
    vK: Projection.attr('VK'),
    facebook: Projection.attr('Facebook'),
    twitter: Projection.attr('Twitter'),
    birthday: Projection.attr('Дата рождения'),
    gender: Projection.attr('Пол'),
    vip: Projection.attr('VIP'),
    karma: Projection.attr('Карма')
  });
  modelClass.defineProjection('ApplicationUserL', 'flexberry-ember-demo-application-user', {
    name: Projection.attr('Имя'),
    eMail: Projection.attr('E mail'),
    birthday: Projection.attr('Дата рождения'),
    gender: Projection.attr('Пол'),
    vip: Projection.attr('VIP'),
    karma: Projection.attr('Карма'),
    phone1: Projection.attr('', { hidden: true }),
    vK: Projection.attr('', { hidden: true }),
    facebook: Projection.attr('', { hidden: true }),
    twitter: Projection.attr('', { hidden: true }),
    activated: Projection.attr('', { hidden: true }),
    phone2: Projection.attr('', { hidden: true }),
    phone3: Projection.attr('', { hidden: true }),
    login: Projection.attr('', { hidden: true })
  });
};
