import DeleteButton from 'components/DeleteButton/DeleteButton';

import css from './ContactItem.module.css';
import { fetchDeleteContact } from 'redux/phone.reduser';
import { useDispatch } from 'react-redux';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactItem} id={contact.id}>
      <p>{`${contact.name}: ${contact.phone}`}</p>
      <DeleteButton
        handleDeleteUser={() => dispatch(fetchDeleteContact(contact.id))}
      />
    </li>
  );
};

export default ContactItem;
