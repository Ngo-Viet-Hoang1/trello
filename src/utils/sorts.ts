/**
 * Utility functions for sorting and ordering arrays
 */

/**
 * Maps an array to a specific order based on an order array and a key
 *
 * @template T - The type of objects in the original array
 * @param originalArray - The array to be reordered
 * @param orderArray - Array of values that define the desired order
 * @param key - The property key to match against the order array
 * @returns A new array with items ordered according to the orderArray
 *
 * @example
 * const items = [
 *   { id: 'c', name: 'Item C' },
 *   { id: 'a', name: 'Item A' },
 *   { id: 'b', name: 'Item B' }
 * ]
 * const order = ['a', 'b', 'c']
 * const sorted = mapArrayToOrder(items, order, 'id')
 * // Result: [{ id: 'a', name: 'Item A' }, { id: 'b', name: 'Item B' }, { id: 'c', name: 'Item C' }]
 */
export const mapArrayToOrder = <T extends Record<string, unknown>>(
  originalArray: T[],
  orderArray: (string | number)[],
  key: keyof T,
): T[] => {
  if (!originalArray?.length || !orderArray?.length) {
    return originalArray || []
  }

  // Create a Map for O(1) lookup performance
  const itemMap = new Map<string | number, T>()

  originalArray.forEach((item) => {
    if (item && key in item) {
      const keyValue = item[key]
      if (typeof keyValue === 'string' || typeof keyValue === 'number') {
        itemMap.set(keyValue, item)
      }
    }
  })

  // Map the order array to the original items, filtering out undefined values
  return orderArray
    .map((orderId) => itemMap.get(orderId))
    .filter((item): item is T => item !== undefined)
}
