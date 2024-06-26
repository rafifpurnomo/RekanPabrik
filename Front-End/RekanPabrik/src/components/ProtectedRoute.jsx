import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProtectedRoute = ({ allowedRoles }) => {
  const token = sessionStorage.getItem('token');
  const user = JSON.parse(sessionStorage.getItem('me'));
  const ROLE = user ? user.role : null;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      Swal.fire({
        title: 'Error!',
        text: 'Please log in first',
        icon: 'error',
        confirmButtonText: 'Continue',
      }).then(() => {
        navigate('/', { replace: true });
      });
    } else if (!allowedRoles.includes(ROLE)) {
      Swal.fire({
        title: 'Error!',
        text: 'Unauthorized access',
        icon: 'error',
        confirmButtonText: 'Continue',
      }).then(() => {
        navigate('/', { replace: true });
      });
    }
  }, [token, ROLE, allowedRoles, navigate]);

  if (!token || (ROLE && !allowedRoles.includes(ROLE))) {
    return null;
  }

  return <Outlet />;
};

export default ProtectedRoute;
