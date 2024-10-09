// Definition
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// student interfaces
const student1: Student = {
  firstName: 'Esther',
  lastName: 'Obongo',
  age: 12,
  location: 'Nairobi',
};

const student2: Student = {
  firstName: 'George',
  lastName: 'Ke',
  age: 47,
  location: 'Heaven',
};

// array variables
const studentsList: Student[] = [student1, student2];

// table factors
const table = document.createElement("table");

studentsList.forEach(student => {
  const row = table.insertRow();
  const cell_1 = row.insertCell(0);
  const cell_2 = row.insertCell(1);

  cell_1.textContent = student.firstName;
  cell_2.textContent = student.location;
});

document.body.appendChild(table);
