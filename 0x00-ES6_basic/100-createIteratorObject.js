// Function named createIteratorObject.
  const totalEmployee = [];
  for (const idx of Object.values(report.allEmployees)) {
    totalEmployee.push(...idx);
  }

  return totalEmployee;
}
