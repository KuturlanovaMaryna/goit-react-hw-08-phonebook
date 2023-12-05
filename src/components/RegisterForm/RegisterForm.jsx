import React from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/auth.reducer';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;
    const name = e.currentTarget.elements.userName.value;

    const formData = {
      name,
      email,
      password,
    };
    dispatch(registerThunk(formData));
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        <p className={css.registerTitle}>Name:</p>
        <input
          className={css.input}
          type="text"
          placeholder="Enter your full name"
          required
          name="userName"
        />
      </label>
      <label>
        <p className={css.registerTitle}>Email:</p>
        <input
          className={css.input}
          type="email"
          placeholder="Enter your email"
          required
          name="userEmail"
        />
      </label>
      <label>
        <p className={css.registerTitle}>Password:</p>
        <input
          className={css.input}
          type="password"
          placeholder="Enter your password"
          required
          autoComplete="off"
          name="userPassword"
        />
      </label>
      <br />
      <button className={css.registerBtn} type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default RegisterForm;
