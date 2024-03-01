import React, { useState } from "react";
import { Form, Input, message, Modal, Select } from "antd";
import Spinner from "./Spinner";
import { createMyUser } from "../service";
import UserTypes from "./UserTypes";

function MyUsersModal({
  setShowAddEditMyUsersModal,
  showAddEditMyUsersModal,
  selectedItemForEdit,
  setSelectedItemForEdit,
  getMyUsers,
  userTypeList = [],
}) {
  console.log(userTypeList, "userTypeList");
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    try {
      setLoading(true);
      await createMyUser(values);
      getMyUsers();
      message.success("MyUsers added successfully");
      setShowAddEditMyUsersModal(false);
      setSelectedItemForEdit(null);
      setLoading(false);
    } catch (error) {
      message.error("Something went wrong");
      setLoading(false);
    }
  };
  return (
    <Modal
      title={selectedItemForEdit ? "Edit My User" : "Add My User Type"}
      visible={showAddEditMyUsersModal}
      onCancel={() => setShowAddEditMyUsersModal(false)}
      footer={false}
    >
      {loading && <Spinner />}
      <Form
        layout="vertical"
        className="transaction-form"
        onFinish={onFinish}
        initialValues={selectedItemForEdit}
      >
        <Form.Item label="User Name" name="name">
          <Input type="text" placeholder="Enter user name" />
        </Form.Item>
        <Form.Item label="Type" name="userType">
          <Select placeholder ="Select user type">
            {userTypeList?.map((type) => (
              <Select.Option key={type._id} value={type.userType}>
                {type.userType}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Reference" name="reference">
          <Input placeholder="Enter reference" type="text" />
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

export default MyUsersModal;
