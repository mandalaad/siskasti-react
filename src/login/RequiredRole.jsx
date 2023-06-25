// requireRole.js

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const RequireRole = (WrappedComponent, isLoggedIn, userRole) => {
  const RequireRole = (props) => {
    const history = useHistory();

    useEffect(() => {
      if (!isLoggedIn || !checkUserRole()) {
        history.push('/');
      }
    }, [isLoggedIn, userRole, history]);

    const checkUserRole = () => {
      // Sesuaikan logika berikut sesuai dengan cara Anda menentukan peran pengguna
      if (userRole === 'karyawan') {
        return true; // Karyawan memiliki akses
      } else if (
        userRole === 'bendahara_departemen' ||
        userRole === 'bendahara_divisi'
      ) {
        return true; // Bendahara departemen dan bendahara divisi memiliki akses
      } else if (userRole === 'super_admin') {
        return true; // Super admin memiliki akses
      } else {
        return false; // Peran tidak valid
      }
    };

    return checkUserRole() ? <WrappedComponent {...props} /> : null;
  };

  return RequireRole;
};

export default RequireRole;
