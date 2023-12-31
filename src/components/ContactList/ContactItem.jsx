import DeleteButton from 'components/DeleteButton/DeleteButton';

import css from './ContactItem.module.css';
import { fetchDeleteContact } from 'redux/phone.reduser';
import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactItem} id={contact.id}>
      <Avatar>
        <PersonIcon />
      </Avatar>

      <p>{`${contact.name}: ${contact.number}`}</p>
      <DeleteButton
        handleDeleteUser={() => dispatch(fetchDeleteContact(contact.id))}
      />
    </li>
  );
};

export default ContactItem;
