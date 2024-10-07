// return boolean if elements exist within the set
default export function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
