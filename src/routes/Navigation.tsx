import {
  Route,
  Routes,
  NavLink,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';

import logo from '../assets/react.svg';
import { RegisterPage } from '../03-forms/pages/RegisterPage';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
import { FormikComponents } from '../03-forms/pages/FormikComponents';
import { FormikAbstractation } from '../03-forms/pages/FormikAbtractation';

export const Navigation = () => {
  const handleIsActive = ({ isActive }: { isActive: boolean }): string =>
    isActive ? '' : 'nav-active';

  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='react logo' />
          <ul>
            <li>
              <NavLink to='/register' className={handleIsActive}>
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink to='/formik-basic' className={handleIsActive}>
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink to='/formik-yup' className={handleIsActive}>
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink to='/formik-components' className={handleIsActive}>
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink to='/formik-abstractation' className={handleIsActive}>
                Formik abstractation
              </NavLink>
            </li>
            <li>
              <NavLink to='/users' className={handleIsActive}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/formik-basic' element={<FormikBasicPage />} />
          <Route path='/formik-yup' element={<FormikYupPage />} />
          <Route path='/formik-components' element={<FormikComponents />} />
          <Route
            path='/formik-abstractation'
            element={<FormikAbstractation />}
          />
          <Route path='/users' element={<h1>Users</h1>} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
