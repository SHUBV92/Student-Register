import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Students from './containers/Students/Students';
import EditStudents from './containers/EditStudents/EditStudents';

export default [
  {
    path: '/',
    exact: true,
    name: 'Home',
    sidebar: () => Home,
    main: () => Home,
  },
  {
    path: '/students',
    name: 'Students',
    sidebar: () => Home,
    main: () => Students,
  },
  { path: '/students(/:id)', name: 'EditStudents', Component: EditStudents },
  {
    path: '/register',
    name: 'Register',
    sidebar: () => Home,
    main: () => Register,
  },
];
