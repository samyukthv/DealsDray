import React from 'react'
import {Route,Routes} from 'react-router-dom'
import UserLogin from '../../pages/userPages/UserLogin'
import UserPublicRoutes from './UserPublicRoutes'
import UserProtectedRoutes from './UserProtectedRoutes'
import Home from '../../pages/userPages/Home'
import EmployeeList from '../../pages/userPages/EmployeeList'
import CreateEmployee from '../../pages/userPages/CreateEmployee'

function UserRoutes() {
  return (
 <Routes>
    <Route exact path='/admin/login' element={<UserPublicRoutes><UserLogin/></UserPublicRoutes>}/>
    <Route exact path='/admin/' element={<UserProtectedRoutes><Home/></UserProtectedRoutes>}/>
    <Route exact path='/admin/Employee-List' element={<EmployeeList/>}/>
    <Route exact path='/admin/Create-Employee' element={<CreateEmployee/>}/>

 </Routes>
  )
}

export default UserRoutes
