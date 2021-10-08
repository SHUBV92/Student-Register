import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Students from './containers/Students/Students';
import EditStudents from './containers/EditStudents/EditStudents';

export default [
  { path: '/', name: 'Home', Component: Home },
  { path: '/students', name: 'Students', Component: Students },
  { path: '/students(/:id)', name: 'EditStudents', Component: EditStudents },
  { path: '/register', name: 'Register', Component: Register },
];
