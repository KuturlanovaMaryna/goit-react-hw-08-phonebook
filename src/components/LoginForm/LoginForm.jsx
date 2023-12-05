import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/auth.reducer';
import css from './LoginForm.module.css';

const LogInForm = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };
    dispatch(loginThunk(formData));
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        <p className={css.loginTitle}>Email:</p>
        <input
          className={css.loginInput}
          type="email"
          placeholder="Enter your email"
          required
          name="userEmail"
        />
      </label>
      <label>
        <p className={css.loginTitle}>Password:</p>
        <input
          className={css.loginInput}
          type="password"
          placeholder="Enter your password"
          required
          name="userPassword"
          autoComplete="off"
          minLength={7}
        />
      </label>
      <br />
      <button type="submit" className={css.loginBtn}>
        Sign In
      </button>
    </form>
  );
};

export default LogInForm;
