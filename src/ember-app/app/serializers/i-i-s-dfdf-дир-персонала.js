import { Serializer as ДирПерсоналаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dfdf-дир-персонала';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДирПерсоналаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
