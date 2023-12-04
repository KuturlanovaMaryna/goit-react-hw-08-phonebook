import React, { lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import css from './App.module.css';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { refreshThunk } from '../redux/auth/auth.reducer';
import { Suspense } from 'react';
import Loader from './Loader/Loader';

import * as ROUTES from '../constants/routs';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRote';

const Home = lazy(() => import('pages/HomePage'));
const Registrated = lazy(() => import('pages/RegistratedPage'));
const LogIn = lazy(() => import('pages/LogInPage'));
const Contacts = lazy(() => import('pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <div className={css.appContainer}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path={ROUTES.HOME_ROUTE}
              element={
                <RestrictedRoute>
                  <Home />
                </RestrictedRoute>
              }
            ></Route>

            <Route
              path={ROUTES.CONTACTS_ROUTE}
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            ></Route>

            <Route
              path={ROUTES.LOGIN_ROUTE}
              element={
                <RestrictedRoute>
                  <LogIn />
                </RestrictedRoute>
              }
            ></Route>

            <Route
              path={ROUTES.REGISTER_ROUTE}
              element={
                <RestrictedRoute>
                  <Registrated />
                </RestrictedRoute>
              }
            ></Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
