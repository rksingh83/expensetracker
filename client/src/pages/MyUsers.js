


import React, { useEffect, useState } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import UserTypes from '../components/UserTypes'
import { fetchMyUsers } from '../service'
import { Table } from 'antd'

export const fetchUserList = async(setterFn)=>{
  const userListResponse = await fetchMyUsers() ;
  setterFn(userListResponse?.data||[])
}
const MyUsers = () => {
    const [myUsers, setMyUsers] = useState([])
    useEffect(()=>{
      fetchUserList(setMyUsers)
    }, [])

    
    const columns = [
   
      {
        title: "User Name",
        dataIndex: "name",
      },
      {
        title: "Type",
        dataIndex: "userType",
      },
      {
        title: "Reference",
        dataIndex: "reference",
      }
    ]
  return (
    <div>
        <DefaultLayout>
            <UserTypes/>
            <h1>My Users</h1>

            <div className="table">
            <Table columns={columns} dataSource={myUsers} />
          </div>

        </DefaultLayout>
    </div>
  )
}

export default MyUsers