import { Suspense } from 'react';
import {
  Route,
  Routes,
  NavLink,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';

import logo from '../assets/react.svg';
import { routes } from './routes';

export const Navigation = () => {
  const handleIsActive = ({ isActive }: { isActive: boolean }): string =>
    isActive ? '' : 'nav-active';

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img src={logo} alt='react logo' />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink to={to} className={handleIsActive}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
