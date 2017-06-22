import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import GenderEnum from '../enums/flexberry-ember-demo-gender';

export default FlexberryEnum.extend({
  enum: GenderEnum,
  sourceType: 'FlexberryEmberDemo.Gender'
});
