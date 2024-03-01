import React, { useEffect, useState } from "react";
import UserTypeModal from "./UserTypeModal";
import { Select } from "antd";
import { fetchMyUsers, fetchUserTypes } from "../service";
import MyUsersModal from "./MyUsersModal";

const UserTypes = () => {
  const [showAddEditUserTypeModal, setShowAddEditUserTypeModal] =
    useState(false);

    const [isOpenMyUserModal, setIsMyUserModal] = useState(false);
  const [userTypes, setUserTypes] = useState([]);
  console.log(userTypes);

  useEffect(() => {
    fetchUserTypesList();
    fetchMyUserList()
  }, []);


  const fetchUserTypesList = async () => {
    const response = await fetchUserTypes();
    setUserTypes(response?.data);
  };
 
  const fetchMyUserList = async () => {
    const response = await fetchMyUsers();
    setUserTypes(response?.data);
  };


  return (
    <div>
      <button
        className="primary"
        onClick={() => setShowAddEditUserTypeModal(true)}
      >
        Add User Type
      </button>
      <button
        className="primary"
        onClick={() => setIsMyUserModal(true)}
      >
        Add new user
      </button>
      <div className="d-flex flex-column">
        <h6>Select Frequency</h6>
        <Select>
          {userTypes.map((userType) => (
            <Select.Option 
            key={userType?._id}
            value={userType?._id}>
              {userType?.userType}
            </Select.Option>
          ))}
        </Select>
      </div>
      <UserTypeModal
        showAddEditUserTypeModal={showAddEditUserTypeModal}
        setShowAddEditUserTypeModal={setShowAddEditUserTypeModal}
        getUserTypes={fetchUserTypesList}
      />
       <MyUsersModal
        showAddEditMyUsersModal={isOpenMyUserModal}
        setShowAddEditUserTypeModal={setIsMyUserModal}
        userTypeList={userTypes}
      />
    </div>
  );
};

export default UserTypes;
