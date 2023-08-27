import React from 'react'
import { Navigate } from 'react-router-dom';


function UserPublicRoutes(props) {
  if(localStorage.getItem("adminToken")){
    return <Navigate to='/admin/home'/>
   }else{
    return props.children

}
}

export default UserPublicRoutes
