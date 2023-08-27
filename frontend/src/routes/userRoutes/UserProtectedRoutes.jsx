import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';


function UserProtectedRoutes(props) {
   


  if(localStorage.getItem("adminToken")){
    return props.children
    } if (!localStorage.getItem("adminToken")) {
        return <Navigate to="/admin/login" />
      }
    
}

export default UserProtectedRoutes