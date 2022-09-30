import React, { Children, useEffect } from 'react'
import { UserAuth } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom';

const Protected = () => {
    const user = UserAuth();

    if(!user.user){
      return  <Navigate to="/"></Navigate>
    }
    
  return (
    <div>
        
    </div>
  )
}

export default Protected