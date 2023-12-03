import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';
import Loader from '../Loader/Loader';
import css from './Layout.module.css';
import { selectAuthenticated, selectUserData } from 'redux/auth/auth.selectors';
import { logoutThunk } from 'redux/auth/auth.reducer';

export const Layout = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthenticated);
  const userData = useSelector(selectUserData);

  const onLogOut = () => {
    dispatch(logoutThunk());
  };
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
              <span>Hello, {userData.name}!</span>{' '}
              <button onClick={onLogOut}>Log Out</button>
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
