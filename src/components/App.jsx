import React, { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { refreshThunk } from '../redux/auth/auth.reducer';

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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Registrated />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
