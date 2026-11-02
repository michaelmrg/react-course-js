import { students } from "./data.js";
import withStatus from "./report.js";

const studentsWithStatus = withStatus(students);

for (const student of studentsWithStatus) {
  console.log(`${student.name}: ${student.status}`);
}

console.log(undefined);