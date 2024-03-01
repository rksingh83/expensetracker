import React, { useState } from "react";
import { Form, Input, message, Modal, Select } from "antd";
import Spinner from "./Spinner";
import { createUserType } from "../service";

function UserTypeModal({
  setShowAddEditUserTypeModal,
  showAddEditUserTypeModal,
  selectedItemForEdit,
  setSelectedItemForEdit,
  getUserTypes,
}) {
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    try {
      setLoading(true);
     
       await createUserType(values)
        getUserTypes();
        message.success("UserType added successfully");
      setShowAddEditUserTypeModal(false);
      setSelectedItemForEdit(null);
      setLoading(false);
    } catch (error) {
      message.error("Something went wrong");
      setLoading(false);
    }
  };
  return (
    <Modal
      title={selectedItemForEdit ? "Edit User Type" : "Add User Type"}
      visible={showAddEditUserTypeModal}
      onCancel={() => setShowAddEditUserTypeModal(false)}
      footer={false}
    >
      {loading && <Spinner />}
      <Form
        layout="vertical"
        className="UserType-form"
        onFinish={onFinish}
        initialValues={selectedItemForEdit}
      >
        <Form.Item label="User type" name="userType">
          <Input type="text" placeholder="Enter user type" />
        </Form.Item>

        <div className="d-flex justify-content-end">
          <button className="primary" type="submit">
            SAVE
          </button>
        </div>
      </Form>
    </Modal>
  );
}

export default UserTypeModal;
