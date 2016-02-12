import DS from 'ember-data';
import BaseModel from 'ember-flexberry/models/base';
import Proj from 'ember-flexberry-projections';

var Model = BaseModel.extend({
  name: DS.attr('string'),
  eMail: DS.attr('string'),
  phone1: DS.attr('string'),
  phone2: DS.attr('string'),
  phone3: DS.attr('string'),
  activated: DS.attr('boolean'),
  vk: DS.attr('string'),
  facebook: DS.attr('string'),
  twitter: DS.attr('string'),
  birthday: DS.attr('date'),
  gender: DS.attr('flexberry-ember-demo-gender'),
  vip: DS.attr('boolean'),
  karma: DS.attr('number'),
  validations: {
    name: {presence: true},
    eMail: {presence: true}
  }
});

Model.defineProjection('ApplicationUserE', 'flexberry-ember-demo-application-user', {
  name: Proj.attr('Name'),
  eMail: Proj.attr('E mail'),
  phone1: Proj.attr('Phone1'),
  phone2: Proj.attr('Phone2'),
  phone3: Proj.attr('Phone3'),
  activated: Proj.attr('Activated'),
  vk: Proj.attr('VK'),
  facebook: Proj.attr('Facebook'),
  twitter: Proj.attr('Twitter'),
  birthday: Proj.attr('Birthday'),
  gender: Proj.attr('Gender'),
  vip: Proj.attr('Vip'),
  karma: Proj.attr('Karma')
});

Model.defineProjection('ApplicationUserL', 'flexberry-ember-demo-application-user', {
  name: Proj.attr('Name'),
  eMail: Proj.attr('E mail'),
  phone1: Proj.attr('Phone1'),
  phone2: Proj.attr('Phone2'),
  phone3: Proj.attr('Phone3'),
  activated: Proj.attr('Activated'),
  vk: Proj.attr('VK'),
  facebook: Proj.attr('Facebook'),
  twitter: Proj.attr('Twitter'),
  birthday: Proj.attr('Birthday'),
  gender: Proj.attr('Gender'),
  vip: Proj.attr('Vip'),
  karma: Proj.attr('Karma')
});

export default Model;
