import { camelCase } from 'lodash';

export class ObjectUtil {

    /**
     * To camelize the keys of the given object.
     * In this case the snake_case keys will be transformed to camelCase.
     * @see https://stackoverflow.com/questions/12931828/convert-returned-json-object-properties-to-lower-first-camelcase#answer-50620653
     *
     * @param obj is any kind of object
     * @returns the camelCased object.
     */
    static camelizeKeys = (obj) => {
        if (Array.isArray(obj)) {
            return obj.map(v => ObjectUtil.camelizeKeys(v));
        } else if (obj !== null && obj.constructor === Object) {
            return Object.keys(obj).reduce(
                (result, key) => ({
                    ...result,
                    [camelCase(key)]: ObjectUtil.camelizeKeys(obj[key]),
                }),
            {},
          );
        }
        return obj;
      }
}
