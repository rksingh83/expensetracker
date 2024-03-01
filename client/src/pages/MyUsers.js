


import React, { useEffect, useState } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import UserTypes from '../components/UserTypes'
import { fetchMyUsers } from '../service'

const MyUsers = () => {
    const [myUsers, setMyUsers] = useState([])
    useEffect(()=>{
      fetchUserList()
    }, [])

    const fetchUserList = async()=>{
        const userListResponse = await fetchMyUsers() ;
        setMyUsers(userListResponse?.data||[])
    }
  return (
    <div>
        <DefaultLayout>
            <UserTypes/>
            <h1>My Users</h1>

        </DefaultLayout>
    </div>
  )
}

export default MyUsers