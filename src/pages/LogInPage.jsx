import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/auth.reducer';

const LogInPage = () => {
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
        <p>Email:</p>
        <input
          type="email"
          placeholder="Enter your email"
          required
          name="userEmail"
        />
      </label>
      <label>
        <p>Password:</p>
        <input
          type="password"
          placeholder="Enter your password"
          required
          name="userPassword"
          autoComplete="off"
          minLength={7}
        />
      </label>
      <br />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default LogInPage;
