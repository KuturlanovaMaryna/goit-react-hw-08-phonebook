import { HOME_ROUTE } from '../constants/routs';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthenticated } from '../redux/auth/auth.selectors';

const RestrictedRoute = ({ children, navigateTo = HOME_ROUTE }) => {
  const authenticated = useSelector(selectAuthenticated);

  return authenticated ? <Navigate to={navigateTo} replace /> : children;
};

export default RestrictedRoute;
