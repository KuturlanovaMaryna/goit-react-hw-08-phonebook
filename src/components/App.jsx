import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('pages/HomePage'));
const Registrated = lazy(() => import('pages/RegistratedPage'));
const LogIn = lazy(() => import('pages/LogInPage'));
const Contacts = lazy(() => import('pages/ContactsPage'));

const App = () => {
  // const dispatch = useDispatch();

  // const isLoading = useSelector(selectIsLoading);
  // const errorMassege = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchAllContacts());
  // }, [dispatch]);

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
