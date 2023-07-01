import React from 'react'
import { Navigate } from 'react-router-dom';

const UserRoute = () => {
    const user = JSON.parse(localStorage.getItem("user"));
   return user != null ? <Outlet/> : <Navigate to ="/login" />;
}

export default UserRoute