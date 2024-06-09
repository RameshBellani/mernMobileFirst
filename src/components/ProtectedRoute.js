// components/ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, ...rest }) => {
  const isAuthenticated = false; // Replace with your authentication logic

  return (
    <Route
      {...rest}
      element={isAuthenticated ? children : <Navigate to="/signin" replace />}
    />
  );
};

export default ProtectedRoute;
