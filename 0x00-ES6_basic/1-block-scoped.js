export default function taskBlock(trueOrFalse) {
  const task = false;  // This value cannot be reassigned
  let task2 = true;    // This value can be reassigned later

  if (trueOrFalse) {
    task2 = false;     // This is allowed because 'task2' was declared with 'let'
  }

  return [task, task2];  // task remains 'false', task2 might change based on the condition
}
