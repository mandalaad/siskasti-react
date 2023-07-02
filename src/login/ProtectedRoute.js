import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
  const userRole = localStorage.getItem('userRole'); // Mendapatkan peran pengguna dari localStorage

  return (
    <Route
      {...rest}
      render={(props) =>
        allowedRoles.includes(userRole) ? (
          <Component {...props} />
        ) : (
          <Navigate to="/dashboard-divisi" />
        )
      }
    />
  );
};

export default ProtectedRoute;
