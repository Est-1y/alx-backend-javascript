// return sum of all student ids using reducee func.
const getStudentIdsSum = (students) => {
  const id = students.reduce(
    (acc, value) => acc + value.id, 0,
  );
  return id;
};

export default getStudentIdsSum;
