import React from 'react';
import { logoutThunk } from 'redux/auth/auth.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'redux/auth/auth.selectors';
import css from './HomeTitle.module.css';
import LogoutIcon from '@mui/icons-material/Logout';

const HomeTitle = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const onLogOut = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className={css.homePgae}>
      <span className={css.title}>Hello, {userData.name}!</span>

      <span className={css.greeting}>This is your PHONEBOOK.</span>

      <button className={css.logoutBtn} onClick={onLogOut}>
        <span>Log Out</span>
        <LogoutIcon sx={{ fontSize: 25, marginLeft: 1 }} />
      </button>
    </div>
  );
};

export default HomeTitle;
