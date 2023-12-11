import {
  Route,
  Routes,
  NavLink,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';

import logo from '../assets/react.svg';
import {
  FormikAbstractation,
  RegisterPage,
  FormikBasicPage,
  FormikYupPage,
  FormikComponents,
} from '../03-forms/pages/';

const links = [
  {
    to: '/register',
    label: 'Register Page',
    Component: RegisterPage,
  },
  {
    to: '/formik-basic',
    label: 'Formik Basic',
    Component: FormikBasicPage,
  },
  {
    to: '/formik-yup',
    label: 'Formik Yup',
    Component: FormikYupPage,
  },
  {
    to: '/formik-components',
    label: 'Formik Components',
    Component: FormikComponents,
  },
  {
    to: '/formik-abstractation',
    label: 'Formik Abstractation',
    Component: FormikAbstractation,
  },
  {
    to: '/',
    label: 'Home',
    Component: () => <h1>Home</h1>,
  },
  {
    to: '/users',
    label: 'Users',
    Component: () => <h1>Users</h1>,
  },
];

export const Navigation = () => {
  const handleIsActive = ({ isActive }: { isActive: boolean }): string =>
    isActive ? '' : 'nav-active';

  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='react logo' />
          <ul>
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={handleIsActive}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Routes>
          {links.map(({ Component, to }) => (
            <Route key={to} path={to} element={<Component />} />
          ))}

          <Route path='/*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
