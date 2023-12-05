import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';
import Loader from '../Loader/Loader';
import css from './Layout.module.css';
import { selectAuthenticated } from 'redux/auth/auth.selectors';
import HomeIcon from '@mui/icons-material/Home';

export const Layout = ({ children }) => {
  const authenticated = useSelector(selectAuthenticated);

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <header className={css.header}>
          {authenticated ? (
            <>
              <NavLink className={css.navLink} to="/" end>
                Home
                <HomeIcon sx={{ marginLeft: 1 }} />
              </NavLink>

              <NavLink className={css.navLink} to="/contacts">
                Contacts
              </NavLink>
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
        <main>{children}</main>
        <Outlet />
      </Suspense>
    </div>
  );
};
