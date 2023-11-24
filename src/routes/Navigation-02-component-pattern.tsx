import {
  Route,
  Routes,
  NavLink,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';

import logo from '../assets/react.svg';
import { ShoppingPage } from '../02-component-pattern/pages/ShoppingPage';
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
              <NavLink to='/' className={handleIsActive}>
                Shopping
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' className={handleIsActive}>
                About
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
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/users' element={<h1>Users</h1>} />
          <Route path='/' element={<ShoppingPage />} />
          <Route path='/*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
