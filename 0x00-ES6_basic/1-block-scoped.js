// taskblock function
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* disabling unused vars */
  if (trueOrFalse) {
    task = true;
    task2 = false;
  }
  /* enabling no-unused-vars */

  return [task, task2];
}
