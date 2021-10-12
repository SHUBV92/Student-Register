const filterStudents = (students, query) => {
  if (!query) {
    return students;
  }

  return students.filter((student) => {
    const studentName = student.name.toLowerCase();
    return studentName.includes(query);
  });
};

export default filterStudents;
