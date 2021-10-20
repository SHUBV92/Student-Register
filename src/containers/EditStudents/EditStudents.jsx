import Form from '../../components/Form/Form';

const EditStudent = ({ selectedStudent, students, setStudents }) => {
  const editStudent = (text) => {
    const editedStudent = { ...selectedStudent, name: text };
    const newStudents = students.slice(1, editedStudent);
    students[0] = { ...selectedStudent, name: text };
    console.log('EditedStudents ---->', students);
    setStudents(students);
  };

  return (
    <div>
      <h1>Edit Students</h1>
      <Form editStudent={editStudent} isEditing={true} />;
    </div>
  );
};

export default EditStudent;
