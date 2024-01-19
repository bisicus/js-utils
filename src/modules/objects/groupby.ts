/**
 * Group array of object using their `properties` value.
 * @param returnPlainArray remove the key used for grouping; see examples
 * @example
 * const toGroup = [
 *   { id: 1, category: "A", value: "foo" },
 *   { id: 2, category: "B", value: "bar" },
 *   { id: 3, category: "A", value: "caz" },
 *   { id: 4, category: "B", value: "qux" },
 *   { id: 5, category: "A", value: "caz" },
 *   { id: 6, category: "B", value: "qux" },
 *   { id: 7, category: "C", value: "moos" },
 *   { id: 8, category: "A", value: "caz" },
 *   { id: 9, category: "B", value: "qux" },
 *   { id: 10, category: "C", value: "moos" },
 *   { id: 11, category: "A", value: "foo" },
 *   { id: 12, category: "B", value: "bar" },
 * ];
 *
 * groupBy(toGroup, 'value', false);
 * // [
 * //   [
 * //     'foo',
 * //     [
 * //       { id: 1, category: 'A', value: 'foo' },
 * //       { id: 11, category: 'A', value: 'foo' }
 * //     ]
 * //   ],
 * //   [
 * //     'bar',
 * //     [
 * //       { id: 2, category: 'B', value: 'bar' },
 * //       { id: 12, category: 'B', value: 'bar' }
 * //     ]
 * //   ],
 * //   [
 * //     'caz',
 * //     [
 * //       { id: 3, category: 'A', value: 'caz' },
 * //       { id: 5, category: 'A', value: 'caz' },
 * //       { id: 8, category: 'A', value: 'caz' }
 * //     ]
 * //   ],
 * //   [
 * //     'qux',
 * //     [
 * //       { id: 4, category: 'B', value: 'qux' },
 * //       { id: 6, category: 'B', value: 'qux' },
 * //       { id: 9, category: 'B', value: 'qux' }
 * //     ]
 * //   ],
 * //   [
 * //     'moos',
 * //     [
 * //       { id: 7, category: 'C', value: 'moos' },
 * //       { id: 10, category: 'C', value: 'moos' }
 * //     ]
 * //   ]
 * // ]
 *
 *
 * groupBy(toGroup, 'category', true);
 * // [
 * //   [
 * //     { id: 1, category: 'A', value: 'foo' },
 * //     { id: 3, category: 'A', value: 'caz' },
 * //     { id: 5, category: 'A', value: 'caz' },
 * //     { id: 8, category: 'A', value: 'caz' },
 * //     { id: 11, category: 'A', value: 'foo' }
 * //   ],
 * //   [
 * //     { id: 2, category: 'B', value: 'bar' },
 * //     { id: 4, category: 'B', value: 'qux' },
 * //     { id: 6, category: 'B', value: 'qux' },
 * //     { id: 9, category: 'B', value: 'qux' },
 * //     { id: 12, category: 'B', value: 'bar' }
 * //   ],
 * //   [
 * //     { id: 7, category: 'C', value: 'moos' },
 * //     { id: 10, category: 'C', value: 'moos' }
 * //   ]
 * // ]
 *
 * groupBy(toGroup, ['category', 'value'], true);
 * // [
 * //   [
 * //     { id: 1, category: 'A', value: 'foo' },
 * //     { id: 1, category: 'A', value: 'foo' }
 * //   ],
 * //   [
 * //     { id: 2, category: 'B', value: 'bar' },
 * //     { id: 2, category: 'B', value: 'bar' }
 * //   ],
 * //   [
 * //     { id: 3, category: 'A', value: 'baz' },
 * //     { id: 3, category: 'A', value: 'baz' },
 * //     { id: 3, category: 'A', value: 'baz' }
 * //   ],
 * //   [
 * //     { id: 4, category: 'B', value: 'qux' },
 * //     { id: 4, category: 'B', value: 'qux' },
 * //     { id: 4, category: 'B', value: 'qux' }
 * //   ],
 * //   [
 * //     { id: 5, category: 'C', value: 'quux' },
 * //     { id: 5, category: 'C', value: 'quux' }
 * //   ]
 * // ]
 *
 * groupBy(toGroup, ['category', 'value'], false);
 * // [
 * //   [
 * //     'A-foo',
 * //     [
 * //       { id: 1, category: 'A', value: 'foo' },
 * //       { id: 11, category: 'A', value: 'foo' }
 * //     ]
 * //   ],
 * //   [
 * //     'B-bar',
 * //     [
 * //       { id: 2, category: 'B', value: 'bar' },
 * //       { id: 12, category: 'B', value: 'bar' }
 * //     ]
 * //   ],
 * //   [
 * //     'A-caz',
 * //     [
 * //       { id: 3, category: 'A', value: 'caz' },
 * //       { id: 5, category: 'A', value: 'caz' },
 * //       { id: 8, category: 'A', value: 'caz' }
 * //     ]
 * //   ],
 * //   [
 * //     'B-qux',
 * //     [
 * //       { id: 4, category: 'B', value: 'qux' },
 * //       { id: 6, category: 'B', value: 'qux' },
 * //       { id: 9, category: 'B', value: 'qux' }
 * //     ]
 * //   ],
 * //   [
 * //     'C-moos',
 * //     [
 * //       { id: 7, category: 'C', value: 'moos' },
 * //       { id: 10, category: 'C', value: 'moos' }
 * //     ]
 * //   ]
 * // ]
 * @since 1.0.0
 * @todo throw exception if object does not contain `properties`
 */
export function groupBy<T extends Record<string, unknown>, BoolCondition extends boolean>(
  objectsArray: T[],
  properties: keyof T | Array<keyof T>,
  returnPlainArray: BoolCondition
): GroupOfObjectsConditional<T, BoolCondition> {
  let groupedArray: GroupOfObjectWithKey<T> = [];
  const parsedProperties = Array.isArray(properties) ? properties : [properties];

  groupedArray = objectsArray.reduce((groups, objectToGroup) => {
    // Create a key based on the specified properties
    const key = parsedProperties.map((prop) => objectToGroup[prop]).join('-');

    // Find the index of the key in the result array
    const index = groups.findIndex((group) => group[0] === key);

    // If the key is not found, create a new group
    if (index === -1) {
      groups.push([key, [objectToGroup]]);
    } else {
      // If the key is found, push the object to the existing group
      groups[index]![1].push(objectToGroup);
    }

    // Return the updated result array
    return groups;
  }, groupedArray);

  if (returnPlainArray) {
    const _plain: GroupOfObjects<T> = groupedArray.map((group) => group[1]);
    return _plain as GroupOfObjectsConditional<T, BoolCondition>;
  } else {
    return groupedArray as GroupOfObjectsConditional<T, BoolCondition>;
  }
}

export type GroupOfObjects<T extends Record<string, unknown>> = T[][];
export type GroupOfObjectWithKey<T extends Record<string, unknown>> = Array<[string, T[]]>;

type GroupOfObjectsConditional<T extends Record<string, unknown>, BoolCondition extends boolean> = BoolCondition extends true
  ? GroupOfObjects<T>
  : GroupOfObjectWithKey<T>;
