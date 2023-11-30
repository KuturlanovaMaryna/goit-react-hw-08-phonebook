import css from './DeleteButton.module.css';

const DeleteButton = ({ userId, handleDeleteUser }) => {
  return (
    <button className={css.deleteBtn} onClick={() => handleDeleteUser(userId)}>
      Delete
    </button>
  );
};

export default DeleteButton;
