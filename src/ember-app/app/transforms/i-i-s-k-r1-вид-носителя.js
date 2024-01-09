import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВидНосителяEnum from '../enums/i-i-s-k-r1-вид-носителя';

export default FlexberryEnum.extend({
  enum: ВидНосителяEnum,
  sourceType: 'IIS.KR1.ВидНосителя'
});
