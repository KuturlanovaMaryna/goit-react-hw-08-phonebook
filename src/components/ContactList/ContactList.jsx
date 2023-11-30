import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { selectFilteredContacts } from 'redux/phone.selectors';

const ContactList = () => {
  const filtredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filtredContacts.map(contact => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};

export default ContactList;
