import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import Search from '../components/Search/Search';
import ContactList from '../components/ContactList/ContactList';
import css from '../components/App.module.css';
import Loader from '../components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContacts } from 'redux/phone.reduser';
import { selectIsLoading, selectError } from 'redux/phone.selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const errorMassege = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.titleText}>Phone book</h1>
      <ContactForm />
      <p className={css.searchText}>Find contacts by name</p>
      <Search />
      {isLoading && <Loader />}
      {errorMassege && (
        <div>Something went wrong. Error messege: {errorMassege}</div>
      )}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
