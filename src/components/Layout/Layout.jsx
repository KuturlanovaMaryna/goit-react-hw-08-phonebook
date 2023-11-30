import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Loader from '../Loader/Loader';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div>
      <header className={css.header}>
        <NavLink className={css.navLink} to="/" end>
          Home
        </NavLink>
        <NavLink className={css.navLink} to="/contacts">
          Contacts
        </NavLink>
        <NavLink className={css.navLink} to="/register">
          register
        </NavLink>
        <NavLink className={css.navLink} to="/login">
          Login
        </NavLink>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
