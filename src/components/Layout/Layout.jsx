import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';
import Loader from '../Loader/Loader';
import css from './Layout.module.css';
import { selectAuthenticated, selectUserData } from 'redux/auth/auth.selectors';

export const Layout = () => {
  const authenticated = useSelector(selectAuthenticated);
  const userData = useSelector(selectUserData);

  return (
    <div>
      <header className={css.header}>
        <NavLink className={css.navLink} to="/" end>
          Home
        </NavLink>
        {authenticated ? (
          <>
            <NavLink className={css.navLink} to="/contacts">
              Contacts
            </NavLink>
            <div>
              <span>Hello, {userData.name}!</span> <button>Log Out</button>
            </div>
          </>
        ) : (
          <>
            <NavLink className={css.navLink} to="/register">
              Register
            </NavLink>
            <NavLink className={css.navLink} to="/login">
              Login
            </NavLink>
          </>
        )}
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
