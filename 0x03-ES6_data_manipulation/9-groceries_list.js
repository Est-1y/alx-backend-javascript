// return map of groceries
export default function groceriesList() {
  const groceriesMap = new Map();

  groceriesMap.set('Apple', 10);
  groceriesMap.set('Tomatoes', 10);
  groceriesMap.set('Pasta', 1);
  groceriesMap.set('Rice', 1);
  groceriesMap.set('Banana', 5);

  return groceriesMap;
}
