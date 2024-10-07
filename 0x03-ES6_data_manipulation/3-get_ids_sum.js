// return sum of all student ids using reducee func.
default export function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
