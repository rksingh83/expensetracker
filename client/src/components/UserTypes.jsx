import React, { useState } from "react";
import UserTypeModal from "./UserTypeModal";

const UserTypes = () => {
  const [showAddEditUserTypeModal, setShowAddEditUserTypeModal] =
    useState(false);
  return (
    <div>
      <button onClick={() => setShowAddEditUserTypeModal(true)}>
        Add User Type
      </button>
      <UserTypeModal
        showAddEditUserTypeModal={showAddEditUserTypeModal}
        setShowAddEditUserTypeModal={setShowAddEditUserTypeModal}
      />
    </div>
  );
};

export default UserTypes;
