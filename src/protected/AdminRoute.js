import React from 'react'
import { Navigate } from 'react-router-dom';

const AdminRoute = () => {
    const user = JSON.parse(localStorage.getItem("user"));
   return user != null && user.isAdmin? <Outlet/> : <Navigate to ="/login" />;
}

export default AdminRoute