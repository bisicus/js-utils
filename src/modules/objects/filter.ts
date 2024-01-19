/**
 * Filter array of objects using the values of a set of object properties. Objects in the array must fulfill the same interface
 * @since 1.0.0
 * @todo throw exception if object does not contain `properties`
 */
export function filterUniqueByProperties<T extends Record<string, unknown>>(arr: T[], properties: string | string[]): T[] {
  const filters = Array.isArray(properties) ? properties : [properties];

  // Create a Set to store unique combinations of property values
  const uniqueCombinations: Set<string> = new Set();

  // Use the filter method to iterate over the array and filter based on uniqueness
  const filteredArray = arr.filter((obj) => {
    // Create a string representation of the property values for the specified properties
    const key = filters.map((prop) => obj[prop]).join('-');

    // Check if the combination is already in the Set
    if (uniqueCombinations.has(key)) {
      return false; // Duplicate found, exclude from the filtered array
    }

    // If not a duplicate, add the combination to the Set and include it in the filtered array
    uniqueCombinations.add(key);
    return true;
  });

  return filteredArray;
}
