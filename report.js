const withStatus = (students) => {
  const result = [];

  for (const student of students) {
    const newStudent = {...student, status: student.grade >= 56 ? "pass" : "fail"};
    result.push(newStudent);
  }
  return result;
};

export default withStatus;