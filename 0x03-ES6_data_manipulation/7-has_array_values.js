// return boolean if elements exist within the set
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
