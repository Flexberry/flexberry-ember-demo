import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import VoteTypeEnum from '../enums/flexberry-ember-demo-vote-type';

export default FlexberryEnum.extend({
  enum: VoteTypeEnum,
  sourceType: 'FlexberryEmberDemo.VoteType'
});
