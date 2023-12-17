import { Serializer as СогласиеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dfdf-согласие';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СогласиеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
